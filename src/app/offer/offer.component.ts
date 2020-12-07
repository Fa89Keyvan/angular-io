import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent {


  @Input()
    get product(): any { return this._product; }
    set product(prod: any) { this._product = prod; }
  _product:any;

  @Output() onShowOffer = new EventEmitter();

  constructor() { }

}
