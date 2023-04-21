import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalancesComponent } from './balances/balances.component';
import { SampleRoutingModule } from './sample-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CorePipesModule } from '../../core/pipes/pipes.module';
import { ComponentsComponent } from './components/components.component';

@NgModule({
  declarations: [BalancesComponent, ComponentsComponent],
  imports: [CommonModule, SampleRoutingModule, SharedModule, CorePipesModule],
})
export class SampleModule {}
