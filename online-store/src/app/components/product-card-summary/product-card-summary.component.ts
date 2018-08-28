import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartItem } from '../../models/classes';
import { ProductCartService } from '../../services/product-cart.service';

@Component({
  selector: 'app-product-card-summary',
  templateUrl: './product-card-summary.component.html',
  styleUrls: ['./product-card-summary.component.scss']
})
export class ProductCardSummaryComponent implements OnInit {
  @Input() public item: ShoppingCartItem;
  @Input() public border: boolean;

  constructor(private _productCartService: ProductCartService) { }

  ngOnInit() {
  }

  public removeItem = (event: Event): void => {
    this._productCartService.removeFromCart(this.item);
    event.stopPropagation();
  }
}
