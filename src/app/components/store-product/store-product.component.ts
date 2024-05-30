import { CurrencyPipe, JsonPipe, NgIf, UpperCasePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductInterface } from 'src/app/interfaces/product.interface';
import { ProductsCartService } from 'src/app/services/cart-product/cart-product.service';
import { ApiFakeStoreService } from 'src/app/services/http/api-fake-store/api-fake-store.service';
import { StarRatingComponent } from 'src/app/shared/star-rating/star-rating.component';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'store-product',
  templateUrl: './store-product.component.html',
  styleUrls: ['./store-product.component.css'],
  standalone: true,
  imports: [
    NgIf,
    JsonPipe,
    CurrencyPipe,
    UpperCasePipe,
    StarRatingComponent,
    FormsModule,
  ],
})
export class StoreProductComponent implements OnInit, OnDestroy {
  public idProduct: number | undefined;
  public product: ProductInterface | undefined;
  public quantity: number = 1;

  public loader: boolean = false;
  public alert: boolean = false;

  constructor(
    private ApiFakeStore$: ApiFakeStoreService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productsCart$: ProductsCartService
  ) {}

  ngOnInit(): void {
    this.getProductById();
  }

  public getProductById(): void {
    this.idProduct = parseInt(this.activatedRoute.snapshot.params['id']);

    this.ApiFakeStore$.getProductById(this.idProduct).subscribe((data) => {
      this.product = data;
    });
  }

  public goToStore(): void {
    this.router.navigate([`/store`]);
  }

  public goToProdCart(): void {
    this.router.navigate(['/cart']);
  }

  public saveProdToCart() {
    this.loader = true;
    console.log(`[loader]: `, this.loader);

    if (this.quantity && this.product) {
      let uuid      = uuidv4();
      let quantity  = this.quantity;
      let products  = this.product;

      let addProduct = {uuid, products, quantity};

      this.productsCart$.setProductCartTO(addProduct).then((result) => {
        if (result) {

          setTimeout(() => {
            this.loader = false;
            this.alert = true;
          }, 2000);

          setTimeout(() => {
            this.alert = false;
          }, 10000);

        }

      }).catch((error) => {
        console.error(`[StoreProductComponent.saveProdToCart]: `, error.message);
      });
    }
  }

  ngOnDestroy(): void {
    this.product = undefined;
  }
}
