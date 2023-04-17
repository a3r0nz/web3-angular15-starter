import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component Pages
import { InfoComponent } from "./info/info.component";
import { FavoritesComponent } from "./favorites/favorites.component";
import { ReviewsComponent } from "./reviews/reviews.component";
import { NotificationsComponent } from "./notifications/notifications.component";

const routes: Routes = [
  {
    path: "info",
    component: InfoComponent
  },
  {
    path: "favorites",
    component: FavoritesComponent
  },
  {
    path: "reviews",
    component: ReviewsComponent
  },
  {
    path: 'notifications',
    component: NotificationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AccountRoutingModule { }
