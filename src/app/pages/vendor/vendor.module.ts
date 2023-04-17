import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbDropdownModule, NgbNavModule, NgbCarouselModule, NgbProgressbarModule, NgbRatingModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

// Google Map
import { AgmCoreModule } from '@agm/core';

// Drop Zone
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

// Swiper Slider
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

// Component
import { VendorRoutingModule } from "./vendor-routing.module";
import { SharedModule } from "../../shared/shared.module";
import { AddBusinessComponent } from './add-business/add-business.component';
import { BusinessPromotionComponent } from './business-promotion/business-promotion.component';
import { BusinessesComponent } from './businesses/businesses.component';

// Order By Sorting
import { SortByVendorPipe } from "../vendor/sort-by.pipe";


const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*'
};

@NgModule({
  declarations: [
    AddBusinessComponent,
    BusinessPromotionComponent,
    BusinessesComponent,
    SortByVendorPipe
  ],
  imports: [
    CommonModule,
    NgbDropdownModule,
    NgbNavModule,
    NgbCarouselModule,
    VendorRoutingModule,
    NgbProgressbarModule,
    NgbRatingModule,
    NgbCollapseModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE'
    }),
    DropzoneModule,
    NgxUsefulSwiperModule
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }
  ]
})
export class VendorModule { }
