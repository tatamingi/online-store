import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import {ShoppingCart, ShoppingCartItem} from '../../models/classes';
import { ProductCartService } from '../../services/product-cart.service';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-cart-overlay',
  templateUrl: './cart-overlay.component.html',
  styleUrls: ['./cart-overlay.component.scss']
})
export class CartOverlayComponent implements OnInit {
  @ViewChild('cartContainer')
  public cartRef: ElementRef;

  @HostListener('document:click', ['$event'])
  handleClick(event: Event) {
    if (this.visible && this.cartRef.nativeElement === event.target) {
      return
    }
    this.hide();
  }

  @Input()
  public cart: ShoppingCart;

  public visible: boolean;

  constructor(
    private _productCartService: ProductCartService
    ) {
  }

  ngOnInit() {
  }

  public show = (event: Event): void => {
    this.visible = true;
    event.preventDefault();
    event.stopPropagation();
  }

  public hide = (): void => {
    this.visible = false;
  }

  public checkout = (cartItems: ShoppingCartItem[], event: Event): void => {
    this._productCartService.checkout(cartItems)
      .subscribe();
    event.stopPropagation();
  }
}
