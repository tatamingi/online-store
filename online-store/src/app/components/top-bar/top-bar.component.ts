import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/index';
import { ShoppingCart } from '../../models/classes';
import { ProductCartService } from '../../services/product-cart.service';
import { ShoppingCartComponent } from '../cart-wrapper/cart-wrapper.component';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  public cart$: Observable<ShoppingCart>;
  @ViewChild('cart') private _cart: ShoppingCartComponent;

  constructor(
    private _productCartService: ProductCartService
  ) { }

  async ngOnInit() {
    this.cart$ = await this._productCartService.getCart();
  }

  public toggleCart = (event: Event): void => {
    event.preventDefault();
    this._cart.visible ?
      this._cart.hide() :
      this._cart.show(event)
  }
}
