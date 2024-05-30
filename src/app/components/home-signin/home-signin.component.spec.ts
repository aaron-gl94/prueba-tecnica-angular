import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSigninComponent } from './home-signin.component';

describe('HomeSigninComponent', () => {
  let component: HomeSigninComponent;
  let fixture: ComponentFixture<HomeSigninComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSigninComponent]
    });
    fixture = TestBed.createComponent(HomeSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
