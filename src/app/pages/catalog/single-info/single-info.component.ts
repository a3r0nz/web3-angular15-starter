import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { recently } from './single-info.model';
import { recentlyData } from './data';

@Component({
  selector: 'app-single-info',
  templateUrl: './single-info.component.html',
  styleUrls: ['./single-info.component.scss']
})

/**
 * Single Info Component
 */
export class SingleInfoComponent implements OnInit {

   // bread crumb items
   breadCrumbItems!: Array<{}>;
   public aboutColleaps = true;
   public amenitiesColleaps = true;
   recentlyData!: recently[];
   longitude = 20.728218;
  latitude = 52.128973;

   constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
     /**
     * BreadCrumb
     */
      this.breadCrumbItems = [
        { label: 'Home', link:'' },
        { label: 'Find accommodation', link:'/catalog/grid' },
        { label: 'Berlin Business Hotel', active: true }
      ];

    // Chat Data Get Function
     this._fetchData();

    document.body.classList.remove('bg-secondary');

  }

   // Chat Data Fetch
   private _fetchData() {
    this.recentlyData = recentlyData;
  }

  /**
   * recently Swiper setting
   */
   recently = {
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 25,
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

  /**
   * Open Review modal
   * @param content modal content
   */
   openMapModal(content: any) {
    this.modalService.open(content, { size: 'fullscreen', centered: true });
  }

}
