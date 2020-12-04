import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent {

  @Input() product:any;
  @Output() onShowOffer = new EventEmitter();

  constructor() { }

}
