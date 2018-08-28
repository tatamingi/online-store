import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ContentComponent } from './components/content/content.component';
import { PromoComponent } from './components/promo/promo.component';
import { FooterComponent } from './components/footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './/app-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductCardSummaryComponent } from './components/product-card-summary/product-card-summary.component';
import { CartOverlayComponent } from './components/cart-overlay/cart-overlay.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemsComponent } from './components/cart-items/cart-items.component';



@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ContentComponent,
    PromoComponent,
    FooterComponent,
    ProductsComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductDetailComponent,
    ProductCardSummaryComponent,
    CartOverlayComponent,
    CartComponent,
    CartItemsComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
