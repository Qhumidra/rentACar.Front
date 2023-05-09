import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { CartItem, CartItems } from '../models/cartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addToCart(car: Car) {
    let item = new CartItem();
    item.car = car;
    CartItems.push(item);
  }
  list() {
    return CartItems;
  }
}
