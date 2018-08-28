import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/classes';
import { SIZES } from '../../data/data';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public sizes: number[];
  public product: Product;

  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductService
  ) {
    this.sizes = SIZES;
  }

  ngOnInit() {
    const key = this._route.snapshot.paramMap.get('key');
    this._productService.getByKey(key)
      .subscribe((product: Product) => {
        this.product = product;
      })
  }

}
