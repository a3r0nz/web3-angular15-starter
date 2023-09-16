import { Injectable } from '@angular/core';
import { WalletService } from './wallet.service';
import { Token } from '../@model/token';
import { ethers } from 'ethers';
import ERC20_ABI from '../@abi/common/erc20.json';

@Injectable({
  providedIn: 'root',
})
export class ContractService {
  constructor(private walletService: WalletService) {}

  async getBalance(token: Token) {
    const publicProvider = await this.walletService.getPublicProvider();
    const tokenContract: any = await new ethers.Contract(token.address, ERC20_ABI, publicProvider);
    return await tokenContract.balanceOf(this.walletService.account);
  }
}
