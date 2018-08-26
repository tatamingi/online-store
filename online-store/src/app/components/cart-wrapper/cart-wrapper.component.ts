import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { ShoppingCart } from '../../models/classes';
import { ProductCartService } from '../../services/product-cart.service';


@Component({
  selector: 'cart-wrapper',
  templateUrl: './cart-wrapper.component.html',
  styleUrls: ['./cart-wrapper.component.scss']
})
export class ShoppingCartComponent implements OnInit {
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

  constructor(private _productCartService: ProductCartService) { }

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
}
