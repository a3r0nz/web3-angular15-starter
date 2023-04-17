import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbCarouselModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';

// Swiper Slider
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

// Google Map
import { AgmCoreModule } from '@agm/core';

// Search Filter
import { Ng2SearchPipeModule } from 'ng2-search-filter';

// Component
import { ExtraPagesRoutingModule } from "./extrapages-routing.module";
import { SharedModule } from "../../shared/shared.module";
import { AboutComponent } from './about/about.component';
import { BlogGridComponent } from './blog-grid/blog-grid.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { SingleTopicComponent } from './single-topic/single-topic.component';

// Order By Sorting
import { SortByExtraPagePipe } from "../extrapages/sort-by.pipe";

@NgModule({
  declarations: [
    AboutComponent,
    BlogGridComponent,
    SingleBlogComponent,
    ContactsComponent,
    HelpCenterComponent,
    SingleTopicComponent,
    SortByExtraPagePipe
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
      apiKey: 'AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE'
    }),
    Ng2SearchPipeModule
  ]
})
export class ExtrapagesModule { }
