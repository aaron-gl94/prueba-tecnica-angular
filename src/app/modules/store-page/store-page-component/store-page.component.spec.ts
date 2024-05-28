import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorePageComponentComponent } from './store-page.component';

describe('StorePageComponentComponent', () => {
  let component: StorePageComponentComponent;
  let fixture: ComponentFixture<StorePageComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StorePageComponentComponent]
    });
    fixture = TestBed.createComponent(StorePageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
