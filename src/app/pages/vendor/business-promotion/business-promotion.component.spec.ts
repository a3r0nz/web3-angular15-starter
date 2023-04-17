import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPromotionComponent } from './business-promotion.component';

describe('BusinessPromotionComponent', () => {
  let component: BusinessPromotionComponent;
  let fixture: ComponentFixture<BusinessPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessPromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
