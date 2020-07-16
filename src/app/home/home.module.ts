import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from '../home/home-routing.module';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './home.component';
import { EssaiComponent } from '../essai/essai.component';
import { Essai2Component } from './essai2/essai2.component';
import { PanierComponent } from '../panier/panier.component';
import { RegisterComponent } from '../register/register.component';
import { ProductComponent } from '../product/product.component';




@NgModule({
  declarations: [
    HomeComponent,
    PanierComponent,
    RegisterComponent,
    ProductComponent,
    EssaiComponent,
    Essai2Component

  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class HomeModule { }
