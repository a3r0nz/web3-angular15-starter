import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { singleReviews , recently} from './single-reviews.model';
import { reviewData, recentlyData  } from './data';

@Component({
  selector: 'app-single-reviews',
  templateUrl: './single-reviews.component.html',
  styleUrls: ['./single-reviews.component.scss']
})

/**
 * Single Reviews Component
 */
export class SingleReviewsComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  reviewData!: singleReviews[];
  recentlyData!: recently[];
  //  Validation form
  validationform!: UntypedFormGroup;
  submit!: boolean;
  longitude = 20.728218;
  latitude = 52.128973;

  constructor(private modalService: NgbModal, private formBuilder: UntypedFormBuilder) { }

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

    /**
     * Bootstrap validation form data
     */
     this.validationform = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      rating: ['', [Validators.required]],
      review: ['', [Validators.required]],
    });

    document.body.classList.remove('bg-secondary');

  }

   // Chat Data Fetch
   private _fetchData() {
    this.reviewData = reviewData;
    this.recentlyData = recentlyData;
  }

  /**
   * Open modal
   * @param content modal content
   */
   openModal(content: any) {
    this.modalService.open(content, { centered: true });
  }

  /**
  * Bootsrap validation form submit method
  */
   validSubmit() {
    this.submit = true;
  }

  /**
 * Returns form
 */
  get form() {
    return this.validationform.controls;
  }

  /**
   * Open Review modal
   * @param content modal content
   */
   openMapModal(content: any) {
    this.modalService.open(content, { size: 'fullscreen', centered: true });
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

}
