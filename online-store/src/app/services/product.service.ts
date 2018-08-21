import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/index';
import { Product } from '../models/classes';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  public getAll(): Observable<Product[]> {
    return this.db.list<Product>('/products').valueChanges();
  }
}
