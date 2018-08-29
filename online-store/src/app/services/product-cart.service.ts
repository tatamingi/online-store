import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { AngularFireDatabase } from 'angularfire2/database';
import {Observable, throwError} from "rxjs/index";
import { ShoppingCart, ShoppingCartItem } from '../models/classes';
import {catchError, map, take} from 'rxjs/internal/operators';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
  constructor(
    private db: AngularFireDatabase,
    private _http: HttpClient
    ) { }

  public async getCart(): Promise<Observable<ShoppingCart>> {
    const cartId = await this._getOrCreateCartId();
    const cart$ = this.db.object('/shopping-carts/' + cartId).valueChanges() as Observable<any>;
    return cart$.pipe(map(x => {
      return new ShoppingCart(x.items)
    }))
  }

  public async addToCart(product: ShoppingCartItem) {
    this._updateItem(product, 1);
  }

  public async removeFromCart(product: ShoppingCartItem) {
    this._updateItem(product, -1);
  }

  public checkout = (cartItems: ShoppingCartItem[]): Observable<ShoppingCartItem[]> => {
    const url='/checkout';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this._http.post<ShoppingCartItem[]>(url, cartItems, httpOptions)
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

    this.db.list<ShoppingCartItem>('/shopping-carts/' + cartId + '/items/')
      .snapshotChanges().pipe(
        take(1)
      ).subscribe((changes) => {
          const existingItem$ = changes.find((change) => {
            return change.payload.val().key === product.key &&
            change.payload.val().size === product.size}
            );

          if (!_.isNil(existingItem$)) {
            product.quantity = existingItem$.payload.val().quantity + change;
            product.quantity === 0 ?
              this._getItem(cartId, existingItem$.payload.key).remove() :
              this._getItem(cartId, existingItem$.payload.key).update(product);
          } else {
            product.quantity = 1;
            this.db.list<ShoppingCartItem>('/shopping-carts/' + cartId + '/items/')
              .push(product);
          }
        })
  }
}
