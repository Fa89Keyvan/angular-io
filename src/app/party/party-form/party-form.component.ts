import { Component, ComponentFactory, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { LegalPartyFormComponent } from '../legal-party-form/legal-party-form.component';
import { NatualPartyFormComponent } from '../natual-party-form/natual-party-form.component';
import { PartyFormTemplate } from '../party-form-template';
import { PartyFormTemplateDirective } from '../party-form-template.directive';

@Component({
  selector: 'app-party-form',
  templateUrl: './party-form.component.html',
  styleUrls: ['./party-form.component.css']
})
export class PartyFormComponent implements OnInit {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  @ViewChild(PartyFormTemplateDirective, { static: true })
  partyFormTemplate!: PartyFormTemplateDirective;

  ngOnInit(): void {
  }

  showForm(partyType: string) {

    const partyFormContainerRef = this.partyFormTemplate.partyFormTemplateRef;
    partyFormContainerRef.clear();
    var factory : ComponentFactory<PartyFormTemplate>;

    if (partyType === "LegalParty") {

      factory = this.componentFactoryResolver.resolveComponentFactory(LegalPartyFormComponent);
      partyFormContainerRef.createComponent(factory);
      
    }
    else if (partyType === "NaturalParty") {
     
      factory = this.componentFactoryResolver.resolveComponentFactory(NatualPartyFormComponent);
      partyFormContainerRef.createComponent(factory);

    }

  }

}
