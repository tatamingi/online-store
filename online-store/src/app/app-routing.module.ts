import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './components/products/products.component';
import { ContentComponent } from './components/content/content.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: 'detail/:key', component: ProductDetailComponent },
  { path: 'categories', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: '', component: ContentComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
