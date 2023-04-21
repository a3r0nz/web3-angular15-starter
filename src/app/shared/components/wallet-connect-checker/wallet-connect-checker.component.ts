import { Component, OnInit } from '@angular/core';
import { WalletService } from '../../../services/wallet.service';
import { Logger } from '../../../services/logger.service';
const log = new Logger('WalletConnectCheckerComponent');

@Component({
  selector: 'app-wallet-connect-checker',
  templateUrl: './wallet-connect-checker.component.html',
  styleUrls: ['./wallet-connect-checker.component.scss'],
})
export class WalletConnectCheckerComponent implements OnInit {
  isLoading = true;
  connected = false;

  constructor(private _walletService: WalletService) {}

  async ngOnInit() {
    const connectStatus = await this._walletService.getWalletConnectStatus();
    if (connectStatus === '1') {
      this.connected = true;
    } else {
      this._walletService.getAccountSubject().subscribe(async (account) => {
        log.debug('Wallet connected : ' + account);
        if (!this.connected) {
          this.isLoading = true;
          window.location.reload();
        }
      });
    }
    this.isLoading = false;
  }
}
