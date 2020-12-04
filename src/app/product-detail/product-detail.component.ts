import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../app-data/products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productID: number = 0;
  product: any = null;
  productsList = products;

  constructor(private router: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {

    this.router.paramMap.subscribe(params => { 
    
      this.productID = Number(params.get("productID"));
    
    });

    this.product = this.productsList.find(p => p.productID == this.productID);
  }

  addToCart(product:any){
   
    this.cartService.addToCard(product);
    
  }

}
