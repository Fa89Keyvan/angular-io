import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {


  _cartService: CartService;

  constructor(private cartService: CartService) {
    this._cartService = cartService;
  }

  ngOnInit(): void {
  }

}
