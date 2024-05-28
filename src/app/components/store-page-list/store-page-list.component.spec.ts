import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorePageListComponent } from './store-page-list.component';

describe('StorePageListComponent', () => {
  let component: StorePageListComponent;
  let fixture: ComponentFixture<StorePageListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StorePageListComponent]
    });
    fixture = TestBed.createComponent(StorePageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
