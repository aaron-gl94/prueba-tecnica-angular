import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ProductInterface } from 'src/app/interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiFakeStoreService {
  constructor(private httpClient: HttpClient) {}

  // Método para obtener todos los productos
  getAllProducts(): Observable<ProductInterface[]> {
    return this.httpClient.get<ProductInterface[]>(
      `${environment.API_URL}/products`
    );
  }

  // Método para obtener un producto por ID
  getProductById(productId: number): Observable<ProductInterface> {
    return this.httpClient.get<ProductInterface>(
      `${environment.API_URL}/products/${productId}`
    );
  }

  // Método para obtener productos ordenados ascendente o descendente
  getProductsSorted(order: 'asc' | 'desc'): Observable<ProductInterface[]> {
    return this.httpClient.get<ProductInterface[]>(
      `${environment.API_URL}/products?sort=${order}`
    );
  }

  // Método para obtener todas las categorías de productos
  getAllCategories(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${environment.API_URL}/products/categories`);
  }

  // Método para obtener productos por categoría
  getProductsByCategory(category: string): Observable<ProductInterface[]> {
    return this.httpClient.get<ProductInterface[]>(
      `${environment.API_URL}/products/category/${category}`
    );
  }
}