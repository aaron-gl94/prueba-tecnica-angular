import { Injectable } from '@angular/core';
import { EncryptService } from '../encrypt/encrypt.service';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(private encryptService$: EncryptService) {}

  public setItemString(name: string, value: string): void {
    let encryptValue = this.encryptService$.encrypt(value);

    localStorage.setItem(name, encryptValue);
  }

  public getItemString(name: string): string {
    let value = localStorage.getItem(name) ?? '';

    if (value && value !== '') {
      value = this.encryptService$.decrypt(value);
    }

    return value;
  }

  public setItemJson(name: string, value: any): void {
    let encryptValue = this.encryptService$.encrypt(
      JSON.stringify(value).toString()
    );

    localStorage.setItem(name, encryptValue);
  }

  public getItemJson(name: string): any {
    let value = localStorage.getItem(name) || '';

    if (value && value !== '') {
      value = JSON.parse(this.encryptService$.decrypt(value));
    }

    return value;
  }

  public clearItem(name: string) {
    if (localStorage.getItem('productsCart')) {
      localStorage.removeItem(name);
    }

  }

  public cleanAllItems() {
    localStorage.clear();
  }
}
