import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ContentComponent } from './components/content/content.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: '', component: ContentComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
