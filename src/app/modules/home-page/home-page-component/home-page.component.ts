import { Component } from '@angular/core';
import { HomePageLoginComponent } from 'src/app/components/home-page-login/home-page-login.component';
import { HomePageSigninComponent } from 'src/app/components/home-page-signin/home-page-signin.component';

@Component({
    selector: 'home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
    standalone: true,
    imports: [
      HomePageLoginComponent,
      HomePageSigninComponent
    ]
})
export class HomePageComponent {

}
