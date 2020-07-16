import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';
import { EssaiComponent } from '../essai/essai.component';
import { Essai2Component } from './essai2/essai2.component';
import { PanierComponent } from '../panier/panier.component';
import { RegisterComponent } from '../register/register.component';
import { ProductComponent } from '../product/product.component';


 const routes: Routes = [{ path: '', component: HomeComponent, children: [
                              {path: 'essai2', component: Essai2Component},
                              {path: 'home/essai', component: EssaiComponent}
                            ]
                          },
                          {path:"login",component:RegisterComponent},
                          {path:'card',component: PanierComponent},
                         
                          {path:'product',component:ProductComponent},
                      
                        ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }