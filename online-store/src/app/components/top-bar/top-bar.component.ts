import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/index';
import { ShoppingCart } from '../../models/classes';
import { ProductCartService } from '../../services/product-cart.service';
import { CartOverlayComponent } from '../cart-overlay/cart-overlay.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  public cart$: Observable<ShoppingCart>;
  @ViewChild('cart') private _cart: CartOverlayComponent;

  constructor(
    private _productCartService: ProductCartService,
    private _router: Router
  ) { }

  async ngOnInit() {
    this.cart$ = await this._productCartService.getCart();
  }

  public toggleCart = (event: Event): void => {
    event.preventDefault();
    if (this._router.url === '/cart') { return }
    this._cart.visible ?
      this._cart.hide() :
      this._cart.show(event)
  }
}
