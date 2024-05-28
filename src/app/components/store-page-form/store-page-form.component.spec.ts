import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorePageFormComponent } from './store-page-form.component';

describe('StorePageFormComponent', () => {
  let component: StorePageFormComponent;
  let fixture: ComponentFixture<StorePageFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StorePageFormComponent]
    });
    fixture = TestBed.createComponent(StorePageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
