import { NgModule } from '@angular/core';

import { HideAddressPipe } from './hide-address.pipe';

@NgModule({
  declarations: [HideAddressPipe],
  imports: [],
  exports: [HideAddressPipe]
})
export class CorePipesModule {}
