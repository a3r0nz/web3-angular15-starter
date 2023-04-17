import { Component, OnInit } from '@angular/core';

import { aboutReviews } from './reviews.model';
import { reviewData  } from './data';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})

/**
 * Reviews Component
 */
export class ReviewsComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  reviewData!: aboutReviews[];
  readonly = false;

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
     this.breadCrumbItems = [
      { label: 'Home', link:'' },
      { label: 'Account', link:'/account/info' },
      { label: 'Reviews', active: true }
    ];

    // Chat Data Get Function
    this._fetchData();

    // Header Class Added
    document.body.classList.add('bg-secondary');
    document.querySelector('.navbar')?.classList.remove('bg-light');
    if (document.documentElement.scrollTop > 40) {
      document.querySelector('.navbar')?.classList.add('navbar-stuck');
    }
  }

   // Chat Data Fetch
   private _fetchData() {
    this.reviewData = reviewData;
  }

  /**
   * On mobile toggle button clicked
   */
   SideBarMenu() {
    document.getElementById('account-nav')?.classList.toggle('show');
  }

  /**
   * Window scroll method
   */
  // tslint:disable-next-line: typedef
  windowScroll() {
    const navbar = document.querySelector('.navbar');
    if (document.documentElement.scrollTop > 40) {
      navbar?.classList.add('bg-light');
    }
    else {
      navbar?.classList.remove('bg-light');
    }
  }

  // Sort filter
  sortField:any;
  sortBy:any
  SortFilter(){
    this.sortField = (document.getElementById("reviews-sort") as HTMLInputElement).value;
    if (this.sortField[0] == 'A') {
      this.sortBy = 'desc';
      this.sortField = this.sortField.replace(/A/g, '')
    }
    if (this.sortField[0] == 'D') {
      this.sortBy = 'asc';
      this.sortField = this.sortField.replace(/D/g, '')
    }
  }


}
