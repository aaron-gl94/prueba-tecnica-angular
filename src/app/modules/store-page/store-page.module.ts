import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorePageComponent } from './store-page-component/store-page.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreProductComponent } from 'src/app/components/store-product/store-product.component';

const routes: Routes = [
  {path: '', component:StorePageComponent },
  {path: 'product/:id', component:StoreProductComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StorePageModule { }
