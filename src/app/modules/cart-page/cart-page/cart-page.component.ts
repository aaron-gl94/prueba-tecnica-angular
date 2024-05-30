import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartBillComponent } from 'src/app/components/cart-bill/cart-bill.component';
import { CartShoppingComponent } from 'src/app/components/cart-shopping/cart-shopping.component';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
  standalone: true,
  imports: [
    CartBillComponent,
    CartShoppingComponent
  ]
})
export class CartPageComponent {

  constructor(private router: Router) {}
  
  public goToStore(): void {
    this.router.navigate(['store']);
  }
}
