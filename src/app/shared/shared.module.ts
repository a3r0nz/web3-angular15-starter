import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

// Component
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ConnectWalletButtonComponent } from './components/connect-wallet-button/connect-wallet-button.component';
import {CorePipesModule} from "../core/pipes/pipes.module";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    ConnectWalletButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    ScrollToModule.forRoot(),
    CorePipesModule
  ],
  exports: [HeaderComponent, FooterComponent, BreadcrumbsComponent]
})
export class SharedModule { }
