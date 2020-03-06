import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasrorderComponent } from './purchasrorder.component';

describe('PurchasrorderComponent', () => {
  let component: PurchasrorderComponent;
  let fixture: ComponentFixture<PurchasrorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasrorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasrorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
