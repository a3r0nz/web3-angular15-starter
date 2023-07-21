import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BalancesComponent } from './balances/balances.component';
import {VoteComponent} from "./vote/vote.component";

const routes: Routes = [
  {
    path: '',
    component: BalancesComponent,
  },
  {
    path: 'balances',
    component: BalancesComponent,
  },
  {
    path: 'vote',
    component: VoteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SampleRoutingModule {}
