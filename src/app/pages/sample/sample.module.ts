import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalancesComponent } from './balances/balances.component';
import { SampleRoutingModule } from './sample-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CorePipesModule } from '../../core/pipes/pipes.module';

@NgModule({
  declarations: [BalancesComponent],
  imports: [CommonModule, SampleRoutingModule, SharedModule, CorePipesModule],
})
export class SampleModule {}
