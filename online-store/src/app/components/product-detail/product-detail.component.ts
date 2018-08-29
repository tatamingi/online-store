import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import {Product, ShoppingCartItem} from '../../models/classes';
import { SIZES } from '../../data/data';
import { ProductCartService } from "../../services/product-cart.service";


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public sizes: number[];
  public product: Product;
  public  selectedSize: number;

  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductService,
    private _productCartService: ProductCartService
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

  public addToCart = (event: Event, product: Product): void => {
    const productToCart = new ShoppingCartItem({
      title: product.title,
      imageUrls: product.imageUrls,
      price: product.price,
      key: product.key,
      size: this.selectedSize
    })
    this._productCartService.addToCart(productToCart);
    event.preventDefault();
    event.stopPropagation();
  }

  public selectSize = (size: number): void => {
      this.selectedSize = size;
  }
}
