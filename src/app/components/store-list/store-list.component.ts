import { CurrencyPipe, JsonPipe, NgFor, NgIf, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ProductInterface } from 'src/app/interfaces/product.interface';
import { ApiFakeStoreService } from 'src/app/services/http/api-fake-store/api-fake-store.service';
import { CategorySignalService } from 'src/app/services/signal/category/category-signal.service';

@Component({
  selector: 'store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css'],
  standalone: true,
  imports: [NgFor, NgIf, JsonPipe, CurrencyPipe, SlicePipe, UpperCasePipe],
})
export class StoreListComponent implements OnInit {
  public productList: ProductInterface[] = [];

  constructor(
    private apiFakeStore$: ApiFakeStoreService,
    private category$: CategorySignalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.category$.selectedCategory$.subscribe(category => {
      console.log(`[category$]: ${category}`);

      if (category != "") {
        this.getProductsByCat(category);
      } else if (category == "" ) {
        this.getAllProducts();
      } else {
        this.clearProductList();
      }
    });

    this.getAllProducts();
  }

  public getAllProducts() {
    this.clearProductList();

    this.apiFakeStore$.getAllProducts().subscribe((data) => {
      if (data.length) {
        this.productList = data;
      }
    });
  }

  public getProductsByCat(category:string|null) {
    this.apiFakeStore$.getProductsByCategory(category!).subscribe(
      data => {
        this.productList = data;
    });
  }

  public viewDetail(idProduct: number) {
    this.router.navigate([`/store/product/${idProduct}`]);
  }

  public clearProductList() {
    this.productList = [];
  }
}

