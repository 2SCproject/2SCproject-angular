import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HomeModule } from './home/home.module';
import { OrderComponent } from './order/order.component';
import{RegisterService} from './service/register.service';
import { InventoryService } from './service/inventory.service';







@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    FormsModule,
    HttpClientModule,
  
    
  ],
  providers: [RegisterService,
  InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
