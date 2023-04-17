import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {ethers} from "ethers";
import { Logger } from './logger.service';
import {SUPPORT_CHAINS} from '../utils/config.js';
const log = new Logger('WalletService');

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  public provider:any
  public publicProvider:any;

  public account:any
  public accountSubject = new Subject<any>();

  public chain:any
  public chainSubject = new Subject<any>();

  constructor() { }

  async initProvider(){
    log.debug('Init provider')
    this.provider = await new ethers.providers.Web3Provider(window.ethereum, "any")
    this.provider.on('network', (newNetwork:any, oldNetwork:any) => {
      log.debug('network changed to '+newNetwork.chainId)
      if (oldNetwork) {
        log.debug('Chain changed from ' + oldNetwork.chainId + ' to ' + newNetwork.chainId);
        this.chainSubject.next(newNetwork)
      }
    });
    // TODO : init public provider
  }

  async connectWallet(){
    log.debug('Set local storage to connected state')
    await localStorage.setItem("connectStatus",'1')
    const _account = await this.getAccount()
    this.provider = await new ethers.providers.Web3Provider(window.ethereum, "any")
    await this.updateConnectedWallet(_account)
    return _account
  }

  async disconnectWallet(){
    await localStorage.setItem("connectStatus",'0')
    this.accountSubject.next(null)
    this.account = null
  }

  async getAccount(debug = '-1'){
    const enableWallet = localStorage.getItem("connectStatus")
    if(enableWallet  === '1'){
      if(!this.provider){
        await this.initProvider()
      }
      this.account = await this.getCurrentConnectedAccount()
    }
    log.debug('return account ', this.account);
    return this.account;
  }

  async getCurrentConnectedAccount(){
    try{
      if(this.provider){
        const _accounts = await this.provider.send("eth_requestAccounts", []);
        return _accounts[0];
      }
    }catch(error){
      log.error(`error on get currentConnectedAccount`, error);
    }
  }

  getChainSubject():Observable<any>{
    return this.chainSubject.asObservable()
  }

  getAccountSubject():Observable<any>{
    return this.accountSubject.asObservable()
  }

  async updateConnectedWallet(walletAddress:any){
    log.debug("updateConnectedWallet walletAddress => %o",walletAddress)

    this.account = walletAddress
    this.accountSubject.next(walletAddress)
    //await this.getCurrentChain()
  }

  async getChainId(){
    try{
      this.provider = await new ethers.providers.Web3Provider(window.ethereum, "any")
      let _chainId = await this.provider.getNetwork()
      return _chainId.chainId
    }catch (e){
      log.error(e)
      return 0
    }
  }

  async getChainInfo(){
    let id = await this.getChainId()
    let chains = await this.getSupportChains()
    let chain = chains.find((ch)=> {
      return ch.chainIdNumber == id
    })
    return chain
  }

  async addNetwork(network){
    try {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId: network.chainId,
          chainName: network.chainName,
          rpcUrls: network.rpcUrls,
          nativeCurrency: network.nativeCurrency,
          blockExplorerUrls: network.blockExplorerUrls,
        }],
      });
    } catch (addError) {
      log.error("error on add chain: %o",addError);
    }
  }

  async switchNetwork(network){
    try {
      // check if the chain to connect to is installed
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: network.chainId }], // chainId must be in hexadecimal numbers
      });
    } catch (error) {
      const errorCode = error.data ? (error.data?.originalError ? error.data?.originalError?.code : 0 ) : 0
      if (error.code === 4902 || errorCode == 4902 || error.code === -32603 || errorCode == -32603) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
              chainId: network.chainId,
              chainName: network.chainName,
              rpcUrls: network.rpcUrls,
              nativeCurrency: network.nativeCurrency,
              blockExplorerUrls: network.blockExplorerUrls,
            }],
          });
        } catch (addError) {
          log.error("error on add chain: %o",addError);
        }
      }
    }
  }

  async getSupportChains(){
    return SUPPORT_CHAINS
  }
}
