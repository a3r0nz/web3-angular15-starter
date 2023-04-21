import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})

/**
 * Breadcrumbs Component
 */
export class BreadcrumbsComponent  {
  // bread crumb items
  @Input()
  breadcrumbItems!: Array<{
    active?: boolean;
    label?: string;
    link?: string;
  }>;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}


}
