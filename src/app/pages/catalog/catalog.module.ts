import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbDropdownModule, NgbTooltipModule, NgbCollapseModule, NgbNavModule, NgbProgressbarModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

// Google Map
import { AgmCoreModule } from '@agm/core';

// Ngx Sliders
import { NgxSliderModule } from '@angular-slider/ngx-slider';

// Simplebar
import { SimplebarAngularModule } from 'simplebar-angular';

// Search Filter
import { Ng2SearchPipeModule } from 'ng2-search-filter';

// Swiper Slider
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

// Flat Picker
import { FlatpickrModule } from 'angularx-flatpickr';


// Component
import { CatalogRoutingModule } from "./catalog-routing.module";
import { SharedModule } from "../../shared/shared.module";
import { GridComponent } from './grid/grid.component';
import { SingleComponent } from './single/single.component';
import { SingleInfoComponent } from './single-info/single-info.component';
import { SingleReviewsComponent } from './single-reviews/single-reviews.component';

import { SortByCatalogPipe } from '../catalog/sort-by.pipe';

@NgModule({
  declarations: [
    GridComponent,
    SingleComponent,
    SingleInfoComponent,
    SingleReviewsComponent,
    SortByCatalogPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbCollapseModule,
    NgbNavModule,
    NgbProgressbarModule,
    NgbRatingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE'
    }),
    NgxSliderModule,
    SimplebarAngularModule,
    CatalogRoutingModule,
    SharedModule,
    NgxUsefulSwiperModule,
    FlatpickrModule.forRoot(),
    Ng2SearchPipeModule
  ],
})
export class CatalogModule { }
