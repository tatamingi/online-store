import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../../services/product-cart.service';
import { Observable } from 'rxjs/index';
import {ShoppingCart, ShoppingCartItem} from '../../models/classes';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cart$: Observable<ShoppingCart>;
  public visible: boolean;

  constructor(private _productCartService: ProductCartService) { }

  async ngOnInit() {
    this.cart$ = await this._productCartService.getCart();
  }

  public checkout = (cartItems: ShoppingCartItem[]): void => {
    this._productCartService.checkout(cartItems)
      .subscribe();
  }
}
