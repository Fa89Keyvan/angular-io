import { Component, OnInit } from '@angular/core';
import { PartyFormTemplate } from '../party-form-template';

@Component({
  selector: 'app-legal-party-form',
  templateUrl: './legal-party-form.component.html',
  styleUrls: ['./legal-party-form.component.css']
})
export class LegalPartyFormComponent implements OnInit, PartyFormTemplate {

  constructor() { }

  ngOnInit(): void {
  }

}
