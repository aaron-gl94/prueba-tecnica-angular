import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorePageComponent } from './store-page-component/store-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component:StorePageComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StorePageModule { }
