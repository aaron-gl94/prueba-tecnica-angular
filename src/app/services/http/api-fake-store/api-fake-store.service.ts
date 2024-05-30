import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ProductInterface } from 'src/app/interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiFakeStoreService {
  constructor(private httpClient: HttpClient) {}

  // Método para obtener todos los productos
  getAllProducts(): Observable<ProductInterface[]> {
    return this.httpClient.get<ProductInterface[]>(`${environment.API_URL}/products`)
    .pipe(
      map(response => {
        console.log(`[apiFakeStoreService.getAllProducts] | Response:`, response);
        return response;
      }),
      catchError( error => {
        let message = `[apiFakeStoreService.getAllProducts] | Error: ${error.message}`;

        console.error(message);
        throw new Error(message);
      })
    );
  }

  // Método para obtener un producto por ID
  public getProductById(idProduct: number): Observable<ProductInterface> {
    return this.httpClient.get<ProductInterface>(`${environment.API_URL}/products/${idProduct}`)
    .pipe(
      map(response => {
        console.log(`[apiFakeStoreService.getProductById(${idProduct})] | Response:`, response);
        return response;
      }),
      catchError( error => {
        let message = `[apiFakeStoreService.getProductById(${idProduct})] | Error: ${error.message}`;

        console.error(message);
        throw new Error(message);
      })
    );
  }

  // Método para obtener productos ordenados ascendente o descendente
  getProductsSorted(order: 'asc' | 'desc'): Observable<ProductInterface[]> {
    return this.httpClient.get<ProductInterface[]>(`${environment.API_URL}/products?sort=${order}`)
    .pipe(
      map(response => {
        console.log(`[apiFakeStoreService.getProductsSorted] | Response:`, response);
        return response;
      }),
      catchError( error => {
        let message = `[apiFakeStoreService.getProductsSorted] | Error: ${error.message}`;

        console.error(message);
        throw new Error(message);
      })
    ); 
  }

  // Método para obtener todas las categorías de productos
  getAllCategories(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${environment.API_URL}/products/categories`)
    .pipe(
      map(response => {
        console.log(`[apiFakeStoreService.getAllCategories] | Response:`, response);
        return response;
      }),
      catchError( error => {
        let message = `[apiFakeStoreService.getAllCategories] | Error: ${error.message}`;

        console.error(message);
        throw new Error(message);
      })
    );
  }

  // Método para obtener productos por categoría
  getProductsByCategory(category: string): Observable<ProductInterface[]> {
    return this.httpClient.get<ProductInterface[]>(`${environment.API_URL}/products/category/${encodeURIComponent(category)}`)
    .pipe(
      map(response => {
        console.log(`[apiFakeStoreService.getProductsByCategory(${category})] | Response:`, response);
        return response;
      }),
      catchError( error => {
        let message = `[apiFakeStoreService.getProductsByCategory(${category})] | Error: ${error.message}`;

        console.error(message);
        throw new Error(message);
      })
    );
  }
}