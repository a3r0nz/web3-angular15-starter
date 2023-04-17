import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-center',
  templateUrl: './help-center.component.html',
  styleUrls: ['./help-center.component.scss']
})

/**
 * HelpCenter Component
 */
export class HelpCenterComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  constructor() { }

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
     this.breadCrumbItems = [
      { label: 'Home', link:'' },
      { label: 'Help center', active: true }
    ];

    // Header Class Added
    document.body.classList.remove('bg-secondary');
    document.querySelector('.navbar')?.classList.remove('bg-light');
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

}
