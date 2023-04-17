import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component pages
import { AboutComponent } from "./about/about.component";
import { ContactsComponent } from "./contacts/contacts.component";
import {Page404Component} from "./page404/page404.component";

const routes: Routes = [
  {
    path: "about",
    component: AboutComponent
  },
  {
    path : "contacts",
    component: ContactsComponent
  },
  {
    path : "404",
    component: Page404Component
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExtraPagesRoutingModule {}
