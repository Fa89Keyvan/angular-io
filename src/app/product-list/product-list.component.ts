import { Component, OnInit } from '@angular/core';
import { products } from '../app-data/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products = products;

  constructor() { }

  ngOnInit(): void {
  }

  share(productName: String){
    window.alert("The product " + productName + " has been shared!");
  }

  showOffer(product: any){
    let discountedPrice = product.price * product.discount ?? 1;
    window.alert("price after discount: " + discountedPrice.toString());
  }

}
