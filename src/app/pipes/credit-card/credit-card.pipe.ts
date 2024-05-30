import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CreditCardPipe',
  standalone: true,
})
export class CreditCardPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }

    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    
    const matches = v.match(/\d{4,19}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0; i < match.length; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  }
}
