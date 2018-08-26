import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCart } from '../../models/classes';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() public cart: ShoppingCart;

  constructor() { }

  ngOnInit() {
  }

}
