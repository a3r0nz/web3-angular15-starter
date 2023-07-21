import {Component, OnInit} from '@angular/core';
import {WalletService} from "../../../services/wallet.service";
import {ContractService} from "../../../services/contract.service";
import {ConstantService} from "../../../services/constant.service";
import {Token} from "../../../models/token";

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {

  total = 0

  constructor(
    private _contractService: ContractService,
  ) {

  }

  async ngOnInit() {
    await this.fetchData()
  }

  async fetchData() {
    this.total = await this._contractService.getVoterTotal()
  }

  async vote() {
    this._contractService.vote()
      .then(async (transaction) => {
        const receipt = await transaction.wait()
        const event = receipt.events.find((e)=> e.event === 'Voted')
        console.log(receipt)
        console.log(event)
        await this.fetchData()
      })
  }
}
