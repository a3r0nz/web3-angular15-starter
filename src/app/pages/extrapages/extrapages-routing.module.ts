import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component pages
import { AboutComponent } from "./about/about.component";
import { ContactsComponent } from "./contacts/contacts.component";

const routes: Routes = [
  {
    path: "about",
    component: AboutComponent
  },
  {
    path : "contacts",
    component: ContactsComponent
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExtraPagesRoutingModule {}
