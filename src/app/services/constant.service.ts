import { Injectable } from '@angular/core';
import {MAIN_USD_CURRENCY, WRAPPED_NATIVE_CURRENCY} from '../constants/tokens.js'
import {WalletService} from "./wallet.service";
@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  constructor(private _walletService:WalletService) { }

  async getWETHToken(chainId?:number){
    if(!chainId){
      chainId = await this._walletService.getChainId()
    }
    return WRAPPED_NATIVE_CURRENCY[chainId]
  }
  async getMainUSDToken(chainId?:number){
    if(!chainId){
      chainId = await this._walletService.getChainId()
    }
    return MAIN_USD_CURRENCY[chainId]
  }
}
