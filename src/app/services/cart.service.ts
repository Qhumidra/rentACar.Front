import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { CartItem, CartItems } from '../models/cartItem';
import { HttpClient } from '@angular/common/http';
import { RentAddModel } from '../models/rentAddModel';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  item = new CartItem();

  apiUrl = 'http://localhost:5280/api/RentList/';

  constructor(private httpClient:HttpClient) {}

  addToCart(car: Car) {
    this.item.car = car;
  }

  add(rentAddModel:RentAddModel){
    let newPath = this.apiUrl + "add"
    return this.httpClient.post(newPath,rentAddModel);
  }

  update(rentAddModel:RentAddModel){
    let newPath = this.apiUrl + "update"
    return this.httpClient.post(newPath,rentAddModel);
  }

  list() {
    return this.item;
  }
}
