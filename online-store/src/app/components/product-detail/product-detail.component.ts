import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/classes';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public sizes = [ 0, 2, 4, 6, 8, 10, 12, 14 ];
  public product: Product;

  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductService
  ) { }

  ngOnInit() {
    const key = this._route.snapshot.paramMap.get('key');
    this._productService.getByKey(key)
      .subscribe((product: Product) => {
        this.product = product;
      })
  }

}
