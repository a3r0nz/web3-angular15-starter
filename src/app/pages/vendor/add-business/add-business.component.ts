import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-business',
  templateUrl: './add-business.component.html',
  styleUrls: ['./add-business.component.scss']
})

/**
 * AddBusiness Component
 */
export class AddBusinessComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  longitude = 20.728218;
  latitude = 52.128973;
  public overviewColleaps = true;
  public amenitiesColleaps = true;
  public socialColleaps = true;
  public aboutColleaps = true;
  public amenitieColleaps = true;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
     this.breadCrumbItems = [
      { label: 'Home', link:'' },
      { label: 'Add business', active: true }
    ];

    // Header Class Added
    document.body.classList.add('bg-secondary');
    document.querySelector('.navbar')?.classList.remove('bg-light');
    if (document.documentElement.scrollTop > 40) {
      document.querySelector('.navbar')?.classList.add('navbar-stuck');
    }
  }

  inView(ele:any){
    ele.scrollIntoView({behavior:"smooth", block:"start", inline:"start"})
  }

  /**
   * Open Review modal
   * @param reviewContent modal content
   */
   openReviewModal(reviewContent: any) {
    this.modalService.open(reviewContent, { size: 'fullscreen', windowClass: 'modal-holder' });
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
  * Category Droup Down
  */
   demosDroupDownClick(event:any) {
    var val = event.target as HTMLElement;
    const categories = document.querySelector('.b-category') as HTMLElement;
    categories.innerText = val.innerText;
 }

}
