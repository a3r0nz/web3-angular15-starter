import { Component, OnInit } from '@angular/core';

import { grid } from './businesses.model';
import { gridData } from './data';

@Component({
  selector: 'app-businesses',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.scss']
})

/**
 * Businesses Component
 */
export class BusinessesComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  gridData!: grid[];
  gridDatas:any;

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
     this.breadCrumbItems = [
      { label: 'Home', link:'' },
      { label: 'My businesses', active: true }
    ];

    // Header Class Added
    document.body.classList.add('bg-secondary');
    document.querySelector('.navbar')?.classList.remove('bg-light');
    if (document.documentElement.scrollTop > 40) {
      document.querySelector('.navbar')?.classList.add('navbar-stuck');
    }

    // Data Get Function
    this._fetchData();
  }

  // Data Fetch
  private _fetchData() {
    this.gridData = gridData;
    this.gridDatas = Object.assign([], this.gridData);
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
    this.sortField = (document.getElementById("sortby") as HTMLInputElement).value;
    if (this.sortField[0] == 'A') {
      this.sortBy = 'desc';
      this.sortField = this.sortField.replace(/A/g, '')
    }
    if (this.sortField[0] == 'D') {
      this.sortBy = 'asc';
      this.sortField = this.sortField.replace(/D/g, '')
    }
  }

  // Category Filter
  categoryClick(e:any, type:any) {
    this.gridDatas = this.gridData.filter((data:any) => {
      return data.category === type;
    });
    e.target.children[1].innerHTML = '('+this.gridDatas.length+')';
  }

}
