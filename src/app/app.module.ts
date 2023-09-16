import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// page
import { AboutComponent } from './@page/about/about.component';
import { ContactsComponent } from './@page/contacts/contacts.component';
import { HomeComponent } from './@page/home/home.component';
import { Page404Component } from './@page/page404/page404.component';

// component
import { BreadcrumbsComponent } from './@component/breadcrumbs/breadcrumbs.component';
import { ConnectWalletButtonComponent } from './@component/connect-wallet-button/connect-wallet-button.component';
import { ConnectedNetworkComponent } from './@component/connected-network/connected-network.component';
import { FooterComponent } from './@component/footer/footer.component';
import { HeaderComponent } from './@component/header/header.component';
import { SpinnerComponent } from './@component/spinner/spinner.component';
import { WalletConnectCheckerComponent } from './@component/wallet-connect-checker/wallet-connect-checker.component';

// pipe
import { FormatUnitPipe } from './@pipe/format-unit.pipe';
import { HideAddressPipe } from './@pipe/hide-address.pipe';
import { SortByPipe } from './@pipe/sort-by.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BalancesComponent } from './@page/balances/balances.component';

@NgModule({
  declarations: [
    AppComponent,

    // page
    AboutComponent,
    BalancesComponent,
    ContactsComponent,
    HomeComponent,
    Page404Component,

    // component
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    ConnectWalletButtonComponent,
    ConnectedNetworkComponent,
    WalletConnectCheckerComponent,
    SpinnerComponent,

    // pipe
    FormatUnitPipe,
    HideAddressPipe,
    SortByPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ScrollToModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

declare global {
  interface Window {
    web3: any;
    ethereum: any;
  }
}
