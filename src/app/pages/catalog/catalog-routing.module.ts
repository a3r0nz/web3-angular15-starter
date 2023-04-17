import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component Pages
import { GridComponent } from "./grid/grid.component";
import { SingleComponent } from "./single/single.component";
import { SingleInfoComponent } from "./single-info/single-info.component";
import { SingleReviewsComponent } from "./single-reviews/single-reviews.component";

const routes: Routes = [
  {
    path:"grid",
    component: GridComponent
  },
  {
    path: "single",
    component: SingleComponent
  },
  {
    path: "single-info",
    component: SingleInfoComponent
  },
  {
    path: "single-reviews",
    component: SingleReviewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CatalogRoutingModule { }
