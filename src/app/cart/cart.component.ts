import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService, private formBuilder: FormBuilder) {

    this.checkoutForm = this.formBuilder.group({
      name:"",
      address:""
    });

  }

  items: Array<any> = [];
  checkoutForm:FormGroup;

  ngOnInit(): void {
    this.items = this.cartService.getAll();
  }

  onSubmit(){

    console.log("Your order has been submitted",JSON.stringify(this.checkoutForm.value));
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    
  }

}
