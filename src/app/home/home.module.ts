import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from '../home/home-routing.module';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './home.component';
import { EssaiComponent } from '../essai/essai.component';
import { PanierComponent } from '../panier/panier.component';
import { RegisterComponent } from '../register/register.component';
import { ProductComponent } from '../product/product.component';
import { NewsComponent } from './news/news.component';
import { PromotionComponent } from './promotion/promotion.component';
import { PopularComponent } from './popular/popular.component';




@NgModule({
  declarations: [
    HomeComponent,
    PanierComponent,
    RegisterComponent,
    ProductComponent,
    EssaiComponent,
    NewsComponent,
    PromotionComponent,
    PopularComponent

  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class HomeModule { }
