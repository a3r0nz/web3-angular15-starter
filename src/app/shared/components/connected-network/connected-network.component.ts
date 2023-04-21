import {Component, OnInit} from '@angular/core';
import { WalletService } from '../../../services/wallet.service';

@Component({
  selector: 'app-connected-network',
  templateUrl: './connected-network.component.html',
  styleUrls: ['./connected-network.component.scss'],
})
export class ConnectedNetworkComponent implements OnInit {
  isSupportNetwork = true;
  chainName = '';
  chainInfo;

  supportChains;

  constructor(private _walletService: WalletService) {}

  async ngOnInit() {
    await this.refresh();
    this.supportChains = await this._walletService.getSupportChains();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this._walletService.getChainSubject().subscribe(async (chain) => {
      await this.refresh();
    });
  }

  async refresh() {
    this.chainInfo = await this._walletService.getChainInfo();
    if (this.chainInfo) {
      this.chainName = this.chainInfo.chainName;
      this.isSupportNetwork = true;
    } else {
      this.isSupportNetwork = false;
    }
  }

  onMenuClick(event: any) {
    const nextEl = event.target.nextElementSibling;
    if (nextEl) {
      const parentEl = event.target.parentNode;
      if (parentEl) {
        parentEl.classList.remove('show');
      }
      nextEl.classList.toggle('show');
    }
    return false;
  }

  async switchChain(chain: any) {
    await this._walletService.switchNetwork(chain);
  }
}
