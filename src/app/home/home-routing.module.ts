import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';
import { EssaiComponent } from '../essai/essai.component';
import { PanierComponent } from '../panier/panier.component';
import { RegisterComponent } from '../register/register.component';
import { ProductComponent } from '../product/product.component';
import{NewsComponent} from  './news/news.component';
import{PromotionComponent} from  './promotion/promotion.component';
import { OrderComponent } from '../order/order.component';
import { ProfileComponent } from '../profile/profile.component';
import { PopularComponent } from './popular/popular.component';





 const routes: Routes = [{ path: '', component: HomeComponent, children: [
                              {path: 'home/essai', component: EssaiComponent},
                              {path: '', component: PopularComponent},
                              {path: 'promotion', component: PromotionComponent},
                              {path: 'news', component: NewsComponent},

                            ]
                          },
                          {
                            path: 'profile', loadChildren: '../profile/profile.module#ProfileModule'
                           },
                          {path:"login",component:RegisterComponent},
                          {path:'card',component: PanierComponent},
                         
                          {path:'product',component:ProductComponent},
                          {path:'order',component:OrderComponent},
                         
                      
                        ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }