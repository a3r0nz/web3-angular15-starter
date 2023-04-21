import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BalancesComponent } from './balances/balances.component';
import {ComponentsComponent} from "./components/components.component";

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
    path: 'components',
    component: ComponentsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SampleRoutingModule {}
