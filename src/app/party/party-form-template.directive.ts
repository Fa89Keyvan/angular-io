import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPartyFormTemplate]'
})
export class PartyFormTemplateDirective {

  constructor(public partyFormTemplateRef : ViewContainerRef) { }

}
