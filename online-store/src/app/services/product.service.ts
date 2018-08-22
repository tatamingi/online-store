import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/index';
import { Product } from '../models/classes';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  public getAll = (): Observable<Product[]> =>
    this.db.list<Product>('/products')
      .snapshotChanges()
      .pipe(map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }) as Product)
      ));


  public getByKey = (productKey: string): Observable<Product> =>
    this.db.list<Product>('/products')
      .snapshotChanges()
      .pipe(map(changes => {
        const product = changes.find( c =>  c.payload.key === productKey );
        return ({ key: product.payload.key, ...product.payload.val() }) as Product
      }));
}
