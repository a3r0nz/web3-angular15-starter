import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {ethers} from "ethers";
import { Logger } from './logger.service';
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
      log.debug('network changed')
      if (oldNetwork) {
        log.debug('Chain changed from ' + oldNetwork.chainId + ' to ' + newNetwork.chainId);
        this.chainSubject.next(newNetwork)
      }
    });
    // TODO : init public provider
  }

  async connectWallet(){
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

  async getSupportChains(){
    return [
      {
        networkAbbr:"bkc",
        chainIdNumber: 96,
        chainId: '0x' + (96).toString(16),
        chainName: "Bitkub Chain Mainnet",
        rpcUrls: ["https://rpc.bitkubchain.io/"],
        nativeCurrency: {
          name: "KUB COIN",
          symbol: "KUB",
          decimals: 18,
        },
        wssUrls:["wss://wss.bitkubchain.io"],
        blockExplorerUrls: ["https://bkcscan.com/"],
      },
      {
        networkAbbr:"bkctestnet",
        chainIdNumber: 25925,
        chainId: '0x' + (25925).toString(16),
        chainName: "Bitkub Chain Testnet",
        rpcUrls: ["https://rpc-testnet.bitkubchain.io"],
        nativeCurrency: {
          name: "KUB COIN",
          symbol: "tKUB",
          decimals: 18,
        },
        wssUrls:["wss://wss-testnet.bitkubchain.io"],
        blockExplorerUrls: ["https://testnet.bkcscan.com/"],
      }
    ]
  }
}
