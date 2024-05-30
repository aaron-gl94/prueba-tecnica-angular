import { CurrencyPipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsCartInterface } from 'src/app/interfaces/products-cart.interface';
import { ProductsCartService } from 'src/app/services/cart-product/cart-product.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'cart-shopping',
  templateUrl: './cart-shopping.component.html',
  styleUrls: ['./cart-shopping.component.css'],
  standalone: true,
  imports: [NgIf, NgFor, CurrencyPipe, UpperCasePipe],
})
export class CartShoppingComponent implements OnInit {
  public productsCart: ProductsCartInterface[] = [];

  public alert: boolean = false;
  public totalProducts: number = 0;
  public subtotalPay: number = 0;
  public taxes: number = 0;
  public totalPay: number = 0;

  constructor(
    private router: Router,
    private productsCart$: ProductsCartService
  ) {}

  ngOnInit(): void {
    this.getProductsCart();
  }

  public getProductsCart(): void {
    this.productsCart$.getProductsCart()
      .then((data) => {
        console.log(data);

        this.productsCart = data;

        console.log(`productsCart: `, this.productsCart);

        if (this.productsCart) {
          this.computeTotals();
        } else {
          this.alert = true;
        }
      })
      .catch((error) => {
        console.error(`[getProductsCart] | Error:`, error.message);
        this.alert = true;
      });
  }

  public removeItemByUuid(uuid:string):void {
    console.log(`[removeItem]: `, uuid);
    this.productsCart = this.productsCart.filter((item) => item.uuid !== uuid);

    this.productsCart$.updateProductsCart(this.productsCart);

    this.getProductsCart();
  }

  public computeTotals():void {

    console.log(`[computeTotals]`);

    this.totalProducts  = 0;
    this.subtotalPay    = 0;
    this.taxes          = 0;
    this.totalPay       = 0;

    this.productsCart.map((product) => {
      this.totalProducts  += Number(product.quantity);
      this.subtotalPay    += Number(product.quantity) * Number(product.products.price);
      this.taxes          = this.subtotalPay * environment.TAXES;

      this.totalPay       = this.subtotalPay + this.taxes;

    });
  }

  public cleanProductsCart(): void {
    this.productsCart$.cleanProductsCart();
    this.productsCart = [];
  }

  public goToStore(): void {
    this.router.navigate(['store']);
  }
}
