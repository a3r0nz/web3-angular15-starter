import { Component, OnInit } from '@angular/core';

// Range Slider
import { Options } from '@angular-slider/ngx-slider';

import { grid } from './grid.model';
import { gridData } from './data';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})

/**
 * Grid Component
 */
export class GridComponent implements OnInit {

   // bread crumb items
   breadCrumbItems!: Array<{}>;
   gridData!: grid[];
   longitude = 20.728218;
   latitude = 52.128973;
   dataCount:any;
   term:any;
   checkedVal: any[] = [];

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
     this.breadCrumbItems = [
      { label: 'Home', link:'' },
      { label: 'Find accommodation', active: true }
    ];

    // Data Get Function
    this._fetchData();

    document.body.classList.remove('bg-secondary');

  }

  /**
  * Category Droup Down
  */
   categoryDownClick(event:any) {
     var val = (event.target as HTMLElement).innerText;
     const categories = document.querySelector('.categories') as HTMLElement;
     categories.innerText = val;
     this.gridDatas = this.gridData.filter( (data:any) => {
      return data.category === val;
    });
    this.dataCount = this.gridDatas.length;
  }

  // Data Fetch
  private _fetchData() {
    this.gridData = gridData;
    this.gridDatas = Object.assign([], this.gridData);
    this.dataCount = this.gridDatas.length;
  }

  /**
   * Filter button clicked
   */
   FilterSidebar() {
    document.getElementById('filters-sidebar')?.classList.toggle('show');
    document.querySelector('.vertical-overlay')?.classList.toggle('show');
   }

   /**
   * SidebarHide modal
   * @param content modal content
   */
  SidebarHide() {
    document.getElementById('filters-sidebar')?.classList.remove('show');
    document.querySelector('.vertical-overlay')?.classList.remove('show');
  }

  // Map Model Open
  openMapModal(){
    document.querySelector('.map-popup')?.classList.remove('invisible');
  }

  // Map Model Open
  closeMapModel(){
    document.querySelector('.map-popup')?.classList.add('invisible');
  }

  gridDatas:any;
  // Location Filter
  LocationSearch(){
    var location = document.getElementById("location") as HTMLInputElement;
    this.gridDatas = this.gridData.filter( (data:any) => {
      return data.city === location.value;
    });
    this.dataCount = this.gridDatas.length;
  }

  // District Filter
  DistrictSearch(){
    var district = document.getElementById("district") as HTMLInputElement;
    this.gridDatas = this.gridData.filter( (data:any) => {
      return data.district === district.value;
    });
    this.dataCount = this.gridDatas.length;
  }

  // Property  Filter
  changeProperty(e:any, type:any) {
    if (e.target.checked) {
      this.checkedVal.push(type);
      this.gridDatas = this.gridData.filter((data: any) => this.checkedVal.includes(data.property));
    }
    else {
      var index = this.checkedVal.indexOf(type);
      if (index > -1) {
        this.checkedVal.splice(index, 1);
      }
      this.gridDatas = this.gridData.filter((data: any) => this.checkedVal.includes(data.property));
    }
    if (this.checkedVal.length == 0) {
      this.gridDatas = this.gridData
    }
    this.dataCount = this.gridDatas.length;
  }

  /**
  * Range Slider Wise Data Filter
  */
  // Range Slider
  minValue: number = 310;
  maxValue: number = 710;
  options: Options = {
    floor: 50,
    ceil: 1000,
    translate: (value: number): string => {
      return '$' + value;
    }
  };
   valueChange(value: number, boundary: boolean): void {
    if (boundary) {
      this.minValue = value;
    } else {
      this.maxValue = value;
      this.gridDatas = this.gridData.filter( (data:any) => {
        return data.price >= this.minValue && data.price <= this.maxValue;
      });
    }
    this.dataCount = this.gridDatas.length;
  }

  // Rooms Filter
  RoomsFilters(){
    var rooms = document.getElementById("rooms") as HTMLInputElement;
    this.gridDatas = this.gridData.filter( (data:any) => {
      return data.rooms === rooms.value;
    });
    this.dataCount = this.gridDatas.length;
  }

  // Amenities Filter
  AmenitiesFilter(e:any, type:any) {
    if (e.target.checked) {
      this.checkedVal.push(type);
      this.gridDatas = this.gridData.filter((data: any) => this.checkedVal.includes(data.amenities));
    }
    else {
      var index = this.checkedVal.indexOf(type);
      if (index > -1) {
        this.checkedVal.splice(index, 1);
      }
      this.gridDatas = this.gridData.filter((data: any) => this.checkedVal.includes(data.amenities));
    }
    if (this.checkedVal.length == 0) {
      this.gridDatas = this.gridData
    }
    this.dataCount = this.gridDatas.length;
  }

   // Facilities Filter
   facilitiesFilter(e:any, type:any) {
    if (e.target.checked) {
      this.checkedVal.push(type);
      this.gridDatas = this.gridData.filter((data: any) => this.checkedVal.includes(data.facilities));
    }
    else {
      var index = this.checkedVal.indexOf(type);
      if (index > -1) {
        this.checkedVal.splice(index, 1);
      }
      this.gridDatas = this.gridData.filter((data: any) => this.checkedVal.includes(data.facilities));
    }
    if (this.checkedVal.length == 0) {
      this.gridDatas = this.gridData
    }
    this.dataCount = this.gridDatas.length;
  }

  /**
   * Rating Filter
   */
   changeRating(e:any, rate:any) {
    if (e.target.checked) {
      this.gridDatas = this.gridData.filter((data:any) => {
        return data.rating >= rate;
      });
    }
    else {
      this.gridDatas = this.gridData.filter((data:any) => {
        return data.gridDatas !== rate;
      });
    }
    this.dataCount = this.gridDatas.length;
  }

  // Category Filter
  categoryClick(e:any, type:any) {
    this.gridDatas = this.gridData.filter((data:any) => {
      return data.category === type;
    });
    this.dataCount = this.gridDatas.length;
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
