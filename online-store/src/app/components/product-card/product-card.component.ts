import { Component, Input, OnInit } from '@angular/core';
import { Product, ShoppingCartItem } from '../../models/classes';
import { SIZES } from '../../data/data';
import { ProductCartService } from '../../services/product-cart.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() public product: Product;

  public sizes: number[];

  constructor(private _productCartService: ProductCartService) {
    this.sizes = SIZES;
  }

  ngOnInit() {
  }

  public addToCart = (event: Event, product: Product, size: number): void => {
    const productToCart = new ShoppingCartItem({
      title: product.title,
      imageUrls: product.imageUrls,
      price: product.price,
      key: product.key,
      size: size
    })
    this._productCartService.addToCart(productToCart);
    event.preventDefault();
    event.stopPropagation();
  }
}
