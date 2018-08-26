import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from "rxjs/index";
import {Product, ShoppingCart, ShoppingCartItem} from '../models/classes';
import { map, take } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
  private _cartId: string;

  constructor(private db: AngularFireDatabase) { }

  // public async setOrCreateCartId() {
  //   debugger
  //   this._cartId = localStorage.getItem('cartId');
  //   if (_.isNil(this._cartId)) {
  //     debugger
  //     const result = await this._create();
  //     this._cartId = result.key;
  //     localStorage.setItem('cartId', this._cartId);
  //   }
  // }

  public async getCart(): Promise<Observable<ShoppingCart>> {
    debugger
    const cartId = await this._getOrCreateCartId();
    const cart$ = this.db.object('/shopping-carts/' + cartId).valueChanges() as Observable<any>;
    return cart$.pipe(map(x => new ShoppingCart(x.items)))
  }

  public async addToCart(product: ShoppingCartItem) {
    this._updateItem(product, 1);
  }

  public async removeFromCart(product: ShoppingCartItem) {
    this._updateItem(product, -1);
  }

  private _create = () =>
    this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });

  private async _getOrCreateCartId(): Promise<string> {
    let cartId = localStorage.getItem('cartId');
    if (_.isNil(cartId)) {
      const result = await this._create();
      cartId = result.key;
      localStorage.setItem('cartId', cartId);
    }
    return cartId;
  }

  private _getItem(cartId: string, productId: string) {
    return this.db.object<ShoppingCartItem>('/shopping-carts/' + cartId + '/items/' + productId);
  }

  private async _updateItem(product: ShoppingCartItem, change: number) {
    const cartId = await this._getOrCreateCartId();
    const item$ = this._getItem(cartId, product.key);
    item$.snapshotChanges().pipe(
      take(1)
    ).subscribe(item => {
      product.quantity = (item.payload.val() ? item.payload.val().quantity : 0) + change;
      if (product.quantity === 0) {
        item$.remove();
      } else {
        item$.update(product);
      }
    });
  }
}
