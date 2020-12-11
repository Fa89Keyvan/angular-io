import { Component, OnInit } from '@angular/core';
import { PartyFormTemplate } from '../party-form-template';

@Component({
  selector: 'app-natual-party-form',
  templateUrl: './natual-party-form.component.html',
  styleUrls: ['./natual-party-form.component.css']
})
export class NatualPartyFormComponent implements OnInit, PartyFormTemplate {

  constructor() { }

  ngOnInit(): void {
  }

}
