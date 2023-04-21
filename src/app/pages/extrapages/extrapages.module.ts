import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NgbCarouselModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';

// Swiper Slider
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

// Google Map
import { AgmCoreModule } from '@agm/core';

// Search Filter
import { Ng2SearchPipeModule } from 'ng2-search-filter';

// Component
import { ExtraPagesRoutingModule } from './extrapages-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';

// Order By Sorting
import { SortByExtraPagePipe } from '../extrapages/sort-by.pipe';
import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations: [
    AboutComponent,
    ContactsComponent,
    SortByExtraPagePipe,
    Page404Component,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbCarouselModule,
    NgbTooltipModule,
    ExtraPagesRoutingModule,
    SharedModule,
    NgxUsefulSwiperModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE',
    }),
    Ng2SearchPipeModule,
  ],
})
export class ExtrapagesModule {}
