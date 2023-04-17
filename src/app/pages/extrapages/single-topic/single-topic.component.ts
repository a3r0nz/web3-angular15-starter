import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-topic',
  templateUrl: './single-topic.component.html',
  styleUrls: ['./single-topic.component.scss']
})

/**
 * SingleTopic Component
 */
export class SingleTopicComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  constructor() { }

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
     this.breadCrumbItems = [
      { label: 'Home', link:'' },
      { label: 'Help center', link:'/pages/help-center' },
      { label: 'Privacy & security', active: true }
    ];

    document.body.classList.remove('bg-secondary');
  }

}
