import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanierComponent } from './panier/panier.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [{path:'card',component: PanierComponent},
                        {path:'',component:RegisterComponent},
                        {path:'product',component:ProductComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
