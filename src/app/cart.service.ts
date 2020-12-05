import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  orderItems:Array<any> = [];

  constructor(private httpClient: HttpClient) { }

  addToCard(product: any){
    this.orderItems.push(product);
  }

  getAll(){
    return this.orderItems
  }

  clearCart(){
    this.orderItems = [];
    return this.orderItems;
  }

  getShippingPrices(){
    return this.httpClient.get("/assets/shipping.json");
  }

}
