import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home-page/home-page.module').then(m => m.HomePageModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home-page/home-page.module').then(m => m.HomePageModule),
  },
  {
    path: 'store',
    loadChildren: () => import('./modules/store-page/store-page.module').then((m) => m.StorePageModule),
  },
  {
    path: 'cart', loadChildren: () => import('./modules/cart-page/cart-page.module').then((m) => m.CartPageModule),
  },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
