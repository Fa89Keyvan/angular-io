import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { OfferComponent } from './offer/offer.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ProductListComponent,
    OfferComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path:"", component: AppComponent },
      { path:"productList", component:ProductListComponent},
      { path: "productDetail/:productID", component: ProductDetailComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
