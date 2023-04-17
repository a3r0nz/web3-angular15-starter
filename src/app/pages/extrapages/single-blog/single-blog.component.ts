import { Component, OnInit } from '@angular/core';

import { blog } from './single-blog.model';
import { blogData } from './data';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.scss']
})

/**
 * SingleBlog Component
 */
export class SingleBlogComponent implements OnInit {

   // bread crumb items
   breadCrumbItems!: Array<{}>;
   blogData!: blog[];

  constructor() { }

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
     this.breadCrumbItems = [
      { label: 'Home', link:'' },
      { label: 'Blog', link:'/pages/blog-grid' },
      { label: 'Air Travel in the Time of COVID-19', active: true }
    ];

    // Data Get Function
    this._fetchData();

    document.body.classList.remove('bg-secondary');
  }

  // Data Fetch
  private _fetchData() {
    this.blogData = blogData;
  }

   /**
   * Blog Swiper setting
   */
    blog = {
      initialSlide: 0,
      slidesPerView: 1,
      spaceBetween: 25,
      pagination: true,
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
   * Filter button clicked
   */
   FilterSidebar() {
    document.getElementById('blog-sidebar')?.classList.toggle('show');
    document.querySelector('.vertical-overlay')?.classList.toggle('show');
   }

   /**
   * SidebarHide modal
   * @param content modal content
   */
  SidebarHide() {
    document.getElementById('blog-sidebar')?.classList.remove('show');
    document.querySelector('.vertical-overlay')?.classList.remove('show');
  }

}
