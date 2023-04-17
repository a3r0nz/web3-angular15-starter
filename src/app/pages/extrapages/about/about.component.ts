import { Component, OnInit } from '@angular/core';

import { service, people, blog } from './about.model';
import { serviceData, peopleData, blogData } from './data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

/**
 * About Component
 */
export class AboutComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  serviceData!: service[];
  blogData!: blog[];
  peopleData!: people[];

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
     this.breadCrumbItems = [
      { label: 'Home', link:'' },
      { label: 'About', active: true }
    ];

    document.querySelector('.breadcrumb')?.classList.add('breadcrumb-light');
    document.body.classList.remove('bg-secondary');

    // Data Get Function
    this._fetchData();
  }

  // Data Fetch
  private _fetchData() {
    this.serviceData = serviceData;
    this.peopleData = peopleData;
    this.blogData = blogData;
  }

   /**
   * People Swiper setting
   */
    people = {
      initialSlide: 0,
      slidesPerView: 1,
      spaceBetween: 25,
      pagination: true,
      navigation: true,
      loop: true,
      breakpoints:{
        768:{
          slidesPerView: 2,
        },
        1200:{
          slidesPerView: 4,
        }
      }
    };

     /**
   * Blog Swiper setting
   */
    blog = {
      initialSlide: 0,
      slidesPerView: 1,
      spaceBetween: 25,
      pagination: true,
      navigation: true,
      loop: true,
      breakpoints:{
        768:{
          slidesPerView: 2,
        },
        1200:{
          slidesPerView: 3,
        }
      }
    };

}
