import { Component, Input } from '@angular/core';
import { SafeHtmlPipe } from 'src/app/pipes/safe-html/safe-html.pipe';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
  standalone: true,
  imports: [
    SafeHtmlPipe
  ]
})
export class StarRatingComponent {
  [x: string]: any;
  @Input() rating: number = 0;
  starValues: number[] = [];
  stars:string = '';

  ngOnChanges(): void {
    this.starValues = Array(5)
      .fill(0)
      .map(
        (_, i) => Math.floor(this.rating / 2) + (i < this.rating % 2 ? 1 : 0)
      );

    this.stars = this.starValues
      .map((value) => `<i class="fa fa-star${value === 0 ? '-o' : ''}"></i>`)
      .join('');
  }
}
