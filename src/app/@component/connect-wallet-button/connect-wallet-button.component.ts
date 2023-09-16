import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Logger } from 'ethers/lib/utils';
import { WalletService } from 'src/app/@service/wallet.service';

const log = new Logger('ConnectWalletButtonComponent');

@Component({
  selector: 'app-connect-wallet-button',
  templateUrl: './connect-wallet-button.component.html',
  styleUrls: ['./connect-wallet-button.component.scss'],
})
export class ConnectWalletButtonComponent implements OnInit {
  account: any;

  constructor(private _modalService: NgbModal, private _walletService: WalletService) {}

  async ngOnInit() {
    this.account = await this._walletService.getAccount();
    this._walletService.getAccountSubject().subscribe(async account => {
      log.debug('Account subscription triggered');
      this.account = account;
    });
  }

  async connectWallet() {
    log.debug('Connecting the wallet');
    await this._walletService.connectWallet();
  }

  async disconnect(confirmModal: any) {
    await this.fireDisconnectModal(confirmModal);
  }

  async fireDisconnectModal(content: any) {
    this._modalService.open(content, { animation: true }).result.then(async result => {
      if (result == 'disconnect') {
        log.debug('Disconnecting the wallet');
        await this._walletService.disconnectWallet();
      }
    });
  }
}
