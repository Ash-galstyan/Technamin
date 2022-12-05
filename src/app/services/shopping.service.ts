import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  api = 'http://localhost:3000/api/products';
  public cartItems: any[] = [];
  itemsChanged$ = new Subject();

  constructor(private http: HttpClient) { }

  getData(page: number) {
    let queryParams = { 'page': page };
    return this.http.get(`${this.api}`, { params: queryParams })
  }

  addToCart(item: any) {
    let found = false;;
    this.cartItems.forEach((cartItem) => {
      if (cartItem.id === item.id) {
        cartItem.quantity += 1;
        found = true;
      }
    });
    if (!found) {
      item.quantity = 1;
      this.cartItems.push(item);
    }
    this.itemsChanged$.next(this.cartItems);
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
    this.itemsChanged$.next(this.cartItems);
  }
}
