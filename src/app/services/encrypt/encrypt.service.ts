import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class EncryptService {
  private secretKey = environment.SECRET_KEY;

  public encrypt(value: string): string {
    return CryptoJS.AES.encrypt(value, this.secretKey.trim()).toString();
  }

  public decrypt(value: string): string {
    return CryptoJS.AES.decrypt(value, this.secretKey.trim()).toString(CryptoJS.enc.Utf8);
  }
}
