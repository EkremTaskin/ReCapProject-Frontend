import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarComponent } from './components/car/car.component';
import { NaviComponent } from './components/navi/navi.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CarimageComponent } from './components/carimage/carimage.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { RentaldetailComponent } from './components/rentaldetail/rentaldetail.component';

@NgModule({
  declarations: [
    AppComponent,
    RentalComponent,
    CarComponent,
    NaviComponent,
    BrandComponent,
    ColorComponent,
    CarimageComponent,
    CustomerComponent,
    CardetailComponent,
    RentaldetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
