import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs/index';
import { Product } from '../../models/classes';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products$: Observable<Product[]>;

  constructor(private _productService: ProductService) {
    this.products$ = this._productService.getAll();
  }

  ngOnInit() {
  }

}
