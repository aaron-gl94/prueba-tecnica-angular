import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPageBillComponent } from './cart-page-bill.component';

describe('CartPageBillComponent', () => {
  let component: CartPageBillComponent;
  let fixture: ComponentFixture<CartPageBillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartPageBillComponent]
    });
    fixture = TestBed.createComponent(CartPageBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
