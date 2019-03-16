import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatecustomerComponent } from './FrontEndComponents/createcustomer/createcustomer.component';
import { EditcustomerComponent } from './FrontEndComponents/editcustomer/editcustomer.component';
import { DeletecustomerComponent } from './FrontEndComponents/deletecustomer/deletecustomer.component';
import { GetcustomerComponent } from './FrontEndComponents/getcustomer/getcustomer.component';
import { CustomerserviceService} from "./customerservice.service";

@NgModule({
  declarations: [
    AppComponent,
    CreatecustomerComponent,
    EditcustomerComponent,
    DeletecustomerComponent,
    GetcustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CustomerserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
