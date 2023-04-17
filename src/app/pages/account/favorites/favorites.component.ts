import { Component, OnInit } from '@angular/core';

import { grid } from './favorites.model';
import { gridData } from './data';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})

/**
 * Favorites Component
 */
export class FavoritesComponent implements OnInit {

   // bread crumb items
   breadCrumbItems!: Array<{}>;
   gridData!: grid[];

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
     this.breadCrumbItems = [
      { label: 'Home', link:'' },
      { label: 'Account', link:'/account/info' },
      { label: 'Favorites', active: true }
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

  /**
   * On mobile toggle button clicked
   */
   SideBarMenu() {
    document.getElementById('account-nav')?.classList.toggle('show');
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

}
