import { ShoppingService } from './../services/shopping.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Item } from '../home/home.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  @Input() quantity: number = 1;
  @Output() closeCart = new EventEmitter();
  cartItems: Item[] = [];
  faXmark = faXmark;
  itemQuantities: any = {};

  constructor(public shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.shoppingService.itemsChanged$.subscribe((items: any) => {
      this.cartItems = items;

      this.cartItems.forEach((item: any, index) => {
        this.itemQuantities[index] = item.quantity;
      })
    });
  }

  quantityChanged(quantity: number, id: number) {
    if (quantity === 0) {
      this.shoppingService.removeFromCart(id);
      if (this.cartItems.length === 0) {
        this.closeCart.emit();
      }
    }
  }

}
