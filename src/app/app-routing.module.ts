import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './@page/about/about.component';
import { ContactsComponent } from './@page/contacts/contacts.component';
import { HomeComponent } from './@page/home/home.component';
import { Page404Component } from './@page/page404/page404.component';
import { BalancesComponent } from './@page/balances/balances.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'balances',
    component: BalancesComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: '404',
    component: Page404Component,
  },
  {
    path: '**',
    redirectTo: '/404', // Error 404 - Page not found
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
