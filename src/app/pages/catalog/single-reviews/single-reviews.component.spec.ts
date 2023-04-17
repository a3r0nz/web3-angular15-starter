import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleReviewsComponent } from './single-reviews.component';

describe('SingleReviewsComponent', () => {
  let component: SingleReviewsComponent;
  let fixture: ComponentFixture<SingleReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
