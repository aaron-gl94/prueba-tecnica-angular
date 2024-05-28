import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageLoginComponent } from './home-page-login.component';

describe('LoginComponent', () => {
  let component: HomePageLoginComponent;
  let fixture: ComponentFixture<HomePageLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageLoginComponent],
    });
    fixture = TestBed.createComponent(HomePageLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
