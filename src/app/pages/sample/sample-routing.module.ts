import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BalancesComponent} from "./balances/balances.component";

const routes: Routes = [
  {
    path:"",
    component: BalancesComponent
  },
  {
    path:"balances",
    component: BalancesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SampleRoutingModule { }
