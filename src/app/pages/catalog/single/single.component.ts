import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Light Box
import { Lightbox } from 'ngx-lightbox';

import { berlin } from './single.model';
import { berlinData } from './data';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})

/**
 * Single Component
 */
export class SingleComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  berlinData!: berlin[];
  longitude = 20.728218;
  latitude = 52.128973;
  _album: Array<any> = [];

  constructor(private modalService: NgbModal, private _lightbox: Lightbox) {
    for (let i = 4; i <= 8; i++) {
      const src = 'assets/img/city-guide/single/th0' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = 'assets/img/city-guide/single/th0' + i + '.jpg';
      const album = {
         src: src,
         caption: caption,
         thumb: thumb
      };

      this._album.push(album);
    }
  }

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
    this.berlinData = berlinData;
  }

   /**
   * berlin Swiper setting
   */
    berlin = {
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

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._album, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  customOpen(a: any): void {
    // open lightbox
    this._lightbox.open(this._album, a);
  }

}
