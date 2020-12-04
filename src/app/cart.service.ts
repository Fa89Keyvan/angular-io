import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  orderItems:Array<any> = [];

  constructor() { }

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

}
