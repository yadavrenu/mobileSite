import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { Cartitems } from './cartitems';
import { DataService } from './data.service';

const routes:Routes=[
  {
    path:'',
    component:CartComponent
  },
  {
    path:'checkout',
    component:CheckoutComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
    // BrowserAnimationsModule
  ],
  providers: [Cartitems, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
