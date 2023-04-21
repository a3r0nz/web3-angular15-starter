import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletConnectCheckerComponent } from './wallet-connect-checker.component';

describe('WalletConnectCheckerComponent', () => {
  let component: WalletConnectCheckerComponent;
  let fixture: ComponentFixture<WalletConnectCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WalletConnectCheckerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WalletConnectCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
