import { NgModule } from '@angular/core';

import { HideAddressPipe } from './hide-address.pipe';
import { FormatUnitPipe } from './format-unit.pipe';

@NgModule({
  declarations: [HideAddressPipe, FormatUnitPipe],
  imports: [],
  exports: [HideAddressPipe, FormatUnitPipe],
})
export class CorePipesModule {}
