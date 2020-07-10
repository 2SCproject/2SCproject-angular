import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanierComponent } from './panier/panier.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{path:'card',component: PanierComponent},
                        {path:'login',component:RegisterComponent},
                        {path:'product',component:ProductComponent},
                        {path:'',component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
