import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component Pages
import { AddBusinessComponent } from "./add-business/add-business.component";
import { BusinessPromotionComponent } from "./business-promotion/business-promotion.component";
import { BusinessesComponent } from "./businesses/businesses.component";

const routes: Routes = [
  {
    path: "add-business",
    component: AddBusinessComponent
  },
  {
    path: "business-promotion",
    component: BusinessPromotionComponent
  },
  {
    path: "businesses",
    component: BusinessesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class VendorRoutingModule { }
