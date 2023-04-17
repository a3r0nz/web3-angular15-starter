import { Component, OnInit } from '@angular/core';

import { promotion } from '../business-promotion/business-promotion.model';
import { promotionData } from '../business-promotion/data';

@Component({
  selector: 'app-business-promotion',
  templateUrl: './business-promotion.component.html',
  styleUrls: ['./business-promotion.component.scss']
})

/**
 * Business Promotion Component
 */
export class BusinessPromotionComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  promotionData!: promotion[];

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
     this.breadCrumbItems = [
      { label: 'Home', link:'' },
      { label: 'Add business', link:'/vendor/add-business' },
      { label: 'Promotion page', active: true }
    ];

     // Chat Data Get Function
     this._fetchData();

     // Header Class Added
    document.body.classList.add('bg-secondary');
    document.querySelector('.navbar')?.classList.remove('bg-light');
    if (document.documentElement.scrollTop > 40) {
      document.querySelector('.navbar')?.classList.add('navbar-stuck');
    }

    this.result = 35;
  }

  // Chat Data Fetch
  private _fetchData() {
    this.promotionData = promotionData;
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

  result:any = 0;
  // Select Checkbox value Get
  onCheckboxChange(e: any) {
    var checkboxes:any = document.getElementsByName('checkAll');
    this.result = 0
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        this.result += parseInt(checkboxes[i].value);
      }
    }
  }

}
