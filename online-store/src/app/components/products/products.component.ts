import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/classes';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import * as _ from 'lodash';
import {AngularFireDatabase} from "angularfire2/database";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public filteredProducts: Product[];
  public category: string;
  public products: Product[];

  constructor(
    private db: AngularFireDatabase,
    private _productService: ProductService,
    private _route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this._populateProducts();
  }

  private _applyFilter = (category: string, products: Product[]) => {
    this.filteredProducts = !_.isNil(category) ?
      products.filter(product => product.category === category) :
      products;
  }

  private _populateProducts = (): void => {
    this._productService
      .getAll()
      .pipe(
        switchMap(p => {
          this.products = p;
          return this._route.queryParamMap;
        })
      ).subscribe(params => {
      const category = params.get('category');
      this._applyFilter(category, this.products);
    });
  }
}
