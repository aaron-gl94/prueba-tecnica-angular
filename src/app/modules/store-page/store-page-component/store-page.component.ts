import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StoreFormComponent } from 'src/app/components/store-form/store-form.component';
import { StoreListComponent } from 'src/app/components/store-list/store-list.component';

@Component({
  selector: 'store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css'],
  standalone: true,
  imports: [
    StoreFormComponent,
    StoreListComponent
  ]
})
export class StorePageComponent {

  constructor(private router:Router) {}

  public goToProdsCart():void {
    this.router.navigate(['cart'])
  }

}
