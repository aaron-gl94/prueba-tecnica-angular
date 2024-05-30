import { NgFor, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiFakeStoreService } from 'src/app/services/http/api-fake-store/api-fake-store.service';
import { CategorySignalService } from 'src/app/services/signal/category/category-signal.service';

@Component({
  selector: 'store-form',
  templateUrl: './store-form.component.html',
  styleUrls: ['./store-form.component.css'],
  standalone: true,
  imports: [NgFor, UpperCasePipe],
})
export class StoreFormComponent implements OnInit {
  categoriesList: string[] = [];

  constructor(
    private apiFakeStore$: ApiFakeStoreService,
    private category$: CategorySignalService
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  public getCategories() {
    this.apiFakeStore$.getAllCategories().subscribe((data) => {
      console.log(`[categoties.response]: ${data}`);

      this.categoriesList = data;
    });
  }

  public sendCategory(category: string) {
    this.category$.setSelectedCategory(category);
  }
}
