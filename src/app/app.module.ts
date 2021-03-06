import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { OfferComponent } from './offer/offer.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VoteTakerComponent } from './vote-taker/vote-taker.component';
import { VoterComponent } from './voter/voter.component';
import { VersionChildComponent } from './version-child/version-child.component';
import { VersionParentComponent } from './version-parent/version-parent.component';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';
import { OtpComponent } from './otp/otp.component';
import { BordComponent } from './observable/bord/bord.component';
import { TaskFormComponent } from './observable/task-form/task-form.component';
import { PartyFormComponent } from './party/party-form/party-form.component';
import { PartyFormTemplateDirective } from './party/party-form-template.directive';
import { NatualPartyFormComponent } from './party/natual-party-form/natual-party-form.component';
import { LegalPartyFormComponent } from './party/legal-party-form/legal-party-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ProductListComponent,
    OfferComponent,
    ProductDetailComponent,
    CartComponent,
    ShippingComponent,
    VoteTakerComponent,
    VoterComponent,
    VersionChildComponent,
    VersionParentComponent,
    CountDownTimerComponent,
    OtpComponent,
    BordComponent,
    TaskFormComponent,
    PartyFormComponent,
    PartyFormTemplateDirective,
    NatualPartyFormComponent,
    LegalPartyFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path:"", component: AppComponent },
      { path:"productList", component:ProductListComponent},
      { path: "productDetail/:productID", component: ProductDetailComponent},
      { path: "cart", component: CartComponent },
      { path: "shipping", component: ShippingComponent },
      { path: "voteTaker", component: VoteTakerComponent },
      { path: "onChanges", component: VersionParentComponent },
      { path: "localVariable", component: OtpComponent },
      { path: "taskBoard", component: BordComponent},
      { path: "componentFactoryResolver", component: PartyFormComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
