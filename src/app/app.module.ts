import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { OfferComponent } from './offer/offer.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ProductListComponent,
    OfferComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path:"", component: AppComponent },
      { path:"productList", component:ProductListComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
