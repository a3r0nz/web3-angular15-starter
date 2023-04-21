import { Component, OnInit } from '@angular/core';
import { WalletService } from '../../../services/wallet.service';
import { ContractService } from '../../../services/contract.service';
import { Token } from '../../../models/token';
import { ConstantService } from '../../../services/constant.service';

@Component({
  selector: 'app-balances',
  templateUrl: './balances.component.html',
  styleUrls: ['./balances.component.scss'],
})
export class BalancesComponent implements OnInit {
  isLoading = false;
  weth: Token;
  usd: Token;
  list: Array<Token>;

  constructor(
    private _walletService: WalletService,
    private _contractService: ContractService,
    private _constantService: ConstantService
  ) {
    this.list = new Array<Token>();
  }

  async ngOnInit() {
    this.isLoading = true;
    this.usd = await this._constantService.getMainUSDToken();
    this.weth = await this._constantService.getWETHToken();
    this.weth.balance = await this._contractService.getBalance(this.weth);
    this.usd.balance = await this._contractService.getBalance(this.usd);
    this.list.push(this.weth);
    this.list.push(this.usd);
    this.isLoading = false;
  }
}
