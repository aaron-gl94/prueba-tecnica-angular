import { Directive, ElementRef, HostListener } from '@angular/core';
import { CreditCardPipe } from 'src/app/pipes/credit-card/credit-card.pipe';

@Directive({
  selector: '[creditCardDirective]',
  standalone: true
})
export class CreditCardDirective {

  private creditCardPipe = new CreditCardPipe();

  constructor(private elementRef:ElementRef) { }

  @HostListener('input', ['$event'])
  onInputChange(event: Event):void {
    const input = event.target as HTMLInputElement;

    const formattedValue = this.creditCardPipe.transform(input.value);

    input.value = formattedValue;
  }

}
