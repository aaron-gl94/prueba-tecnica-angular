import { Component } from '@angular/core';
import { HomeLoginComponent } from 'src/app/components/home-login/home-login.component';
import { HomeSigninComponent } from 'src/app/components/home-signin/home-signin.component';

@Component({
    selector: 'home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
    standalone: true,
    imports: [
      HomeLoginComponent,
      HomeSigninComponent
    ]
})
export class HomePageComponent {

}
