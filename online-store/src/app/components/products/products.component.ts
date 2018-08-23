import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/classes';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import * as _ from 'lodash';


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

  private _applySort = (order: string, products: Product[]) => {
    this.filteredProducts = !_.isNil(order) ?
      _.orderBy(products, ['price'], [order]) :
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
      const order = params.get('sort');
      this._applySort(order, this.products);
    });
  }
}
