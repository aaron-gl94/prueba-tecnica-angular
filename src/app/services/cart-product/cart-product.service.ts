import { Injectable } from '@angular/core';
import { LocalStorageService } from '../storage/local-storage.service';
import { ProductsCartInterface } from 'src/app/interfaces/products-cart.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsCartService {
  constructor(private localStorage$: LocalStorageService) {}

  private products: ProductsCartInterface[] = [];

  public async getProductsCart(): Promise<ProductsCartInterface[]> {
    console.log(`[getProductsCart]: Solicitud exitosa`);

    try {
      this.products =
        (await this.localStorage$.getItemJson('productsCart')) || [];
      return this.products;
    } catch (error) {
      console.error(`[getProductsCart]: Error:`, error);
      throw error;
    }
  }

  public async setProductCartTO(productsCart: ProductsCartInterface): Promise<boolean> {
    console.log(`[setProductsCart]:`, productsCart);

    setTimeout(() => {
      console.log(`[CartProductService.setTimeout]: 2 seg...`);
    }, 2000);

    try {
      this.products = await this.getProductsCart();

      this.products.push(productsCart);
      this.localStorage$.setItemJson('productsCart', this.products);
      console.log(`[localstorage.productsCart]: `, this.localStorage$.getItemJson('productsCart'));

      return true;
    } catch (error) {
      console.error(`[setProductsCart]: Error:`, error);
      throw error;
    }
  }

  public async setProductCart(productsCart: ProductsCartInterface): Promise<boolean> {
    console.log(`[setProductsCart]:`, productsCart);

    try {
      this.products = await this.getProductsCart();

      this.products.push(productsCart);
      this.localStorage$.setItemJson('productsCart', this.products);
      console.log(`[localstorage.productsCart]: `,this.localStorage$.getItemJson('productsCart'));

      return true;
    } catch (error) {
      console.error(`[setProductsCart]: Error:`, error);
      throw error;
    }
  }

  public updateProductsCart(productsCart: ProductsCartInterface[]): Promise<boolean> {
    console.log(`[updateProductsCart]:`, productsCart);

    return new Promise((resolve, reject) => {

      if (productsCart) {
        this.localStorage$.setItemJson('productsCart', productsCart);
        resolve(true);
      }

      reject(new Error('[CartProductsServices]: Error al actualizar el carro de compras.'));
    });
  }

  public cleanProductsCart() {
    if (this.localStorage$.getItemJson('productsCart')) {
      this.localStorage$.clearItem('productsCart');
    }

    this.products = [];

    console.log(`[cleanProductsCart]:`, this.getProductsCart());
  }
}
