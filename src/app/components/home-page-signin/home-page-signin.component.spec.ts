import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageSigninComponent } from './home-page-signin.component';

describe('HomePageSigninComponent', () => {
  let component: HomePageSigninComponent;
  let fixture: ComponentFixture<HomePageSigninComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageSigninComponent]
    });
    fixture = TestBed.createComponent(HomePageSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
