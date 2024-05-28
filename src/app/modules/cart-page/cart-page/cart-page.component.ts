import { Component } from '@angular/core';
import { CartPageBillComponent } from 'src/app/components/cart-page-bill/cart-page-bill.component';
import { CartPageShoppingComponent } from 'src/app/components/cart-page-shopping/cart-shopping.component';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
  standalone: true,
  imports: [
    CartPageBillComponent,
    CartPageShoppingComponent
  ]
})
export class CartPageComponent {

}
