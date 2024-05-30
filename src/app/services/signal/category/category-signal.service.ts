import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategorySignalService {
  private selectedCategory = new Subject<string | null>();

  selectedCategory$ = this.selectedCategory.asObservable();

  setSelectedCategory(category:string | null) {

    console.log(`[CategorySignal$.selectedCategory]:`, this.selectedCategory$);

    this.selectedCategory.next(category);
  }
}
