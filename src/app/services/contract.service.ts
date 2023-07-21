import { Injectable } from '@angular/core';
import { WalletService } from './wallet.service';
import { Token } from '../models/token';
import { ethers } from 'ethers';
import ERC20_ABI from '../abis/common/erc20.json';
import VOTER_ABI from '../abis/vote/voter.json';

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

  async getVoterTotal() {
    const publicProvider = await this.walletService.getPublicProvider();
    const voterContract: any = await new ethers.Contract('0x0b19565A382DAAE20999980e1564225243E7bE24', VOTER_ABI, publicProvider);
    return await voterContract.total();
  }

  async vote(){
    const provider = await this.walletService.getProvider();
    const voterContract: any = await new ethers.Contract('0x0b19565A382DAAE20999980e1564225243E7bE24', VOTER_ABI, provider.getSigner());
    return voterContract.vote();
  }
}
