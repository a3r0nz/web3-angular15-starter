import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbAccordionModule, NgbDropdownModule, NgbNavModule, NgbRatingModule, NgbCollapseModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

// Drop Zone
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

// Flat Picker
import { FlatpickrModule } from 'angularx-flatpickr';

// Component
import { AccountRoutingModule } from "./account-routing.module";
import { SharedModule } from "../../shared/shared.module";
import { InfoComponent } from './info/info.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { FavoritesComponent } from './favorites/favorites.component';

// Order By Sorting
import { SortByAccountPipe } from "../account/sort-by.pipe";

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*'
};

@NgModule({
  declarations: [
    InfoComponent,
    ReviewsComponent,
    NotificationsComponent,
    FavoritesComponent,
    SortByAccountPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbAccordionModule,
    NgbDropdownModule,
    NgbNavModule,
    NgbRatingModule,
    NgbCollapseModule,
    NgbTooltipModule,
    SharedModule,
    AccountRoutingModule,
    DropzoneModule,
    FlatpickrModule.forRoot(),
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }
  ]
})
export class AccountModule { }
