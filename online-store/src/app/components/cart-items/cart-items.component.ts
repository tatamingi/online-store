import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCart } from '../../models/classes';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit {
  @Input() public cart: ShoppingCart;
  @Input() public border: boolean;

  constructor() { }

  ngOnInit() {
  }

}
