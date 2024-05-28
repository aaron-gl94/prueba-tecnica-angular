import { Component } from '@angular/core';
import { StorePageFormComponent } from 'src/app/components/store-page-form/store-page-form.component';
import { StorePageListComponent } from 'src/app/components/store-page-list/store-page-list.component';

@Component({
  selector: 'store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css'],
  standalone: true,
  imports: [
    StorePageFormComponent,
    StorePageListComponent
  ]
})
export class StorePageComponent {

}
