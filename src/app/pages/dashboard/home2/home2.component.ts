import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


import { categories, berlin, events, newBerlin, blog } from './home2.model';
import { categoriesData, berlinData, eventsData, newBerlinData, blogData } from './data';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss']
})

/**
 * Home2 Component
 */
export class Home2Component implements OnInit {

  categoriesData!: categories[];
  berlinData!: berlin[];
  eventsData!: events[];
  newBerlinData!: newBerlin[];
  blogData!: blog[];

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    // Chat Data Get Function
    this._fetchData();

    // City Select data
    document.getElementById("city-content")?.addEventListener("click",function(e) {
      const input = e.target as HTMLElement;
      const city = document.querySelector('.city') as HTMLElement;
      city.innerText = input.innerText;
    });

    // categories Select data
    document.getElementById("categories-content")?.addEventListener("click",function(e) {
      const input = e.target as HTMLElement;
      const categories = document.querySelector('.categories') as HTMLElement;
      categories.innerText = input.innerText;
    });
  }

  // Chat Data Fetch
  private _fetchData() {
    this.categoriesData = categoriesData;
    this.berlinData = berlinData;
    this.eventsData = eventsData;
    this.newBerlinData = newBerlinData;
    this.blogData = blogData;
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
   * events Swiper setting
   */
   events = {
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 25,
    centeredSlides: true,
    navigation: true,
    pagination: true,
    loop: true,
    breakpoints:{
      992:{
        slidesPerView: 2,
      }
    }
  };

  /**
   * events Swiper setting
   */
   newBerlin = {
    initialSlide: 0,
    slidesPerView: 1,
    navigation: true,
    loop: true,
  };

   /**
   * Blogs Swiper setting
   */
    blogs = {
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
