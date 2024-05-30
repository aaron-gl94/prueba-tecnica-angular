import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreditCardDirective } from 'src/app/directives/credit-card/credit-card.directive';
import { CreditCardPipe } from 'src/app/pipes/credit-card/credit-card.pipe';

@Component({
  selector: 'cart-bill',
  templateUrl: './cart-bill.component.html',
  styleUrls: ['./cart-bill.component.css'],
  standalone: true,
  imports: [CreditCardPipe, CreditCardDirective, FormsModule],
})
export class CartBillComponent {
  public creditCard: string = '';
}
