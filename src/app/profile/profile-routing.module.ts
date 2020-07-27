import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import{MyordersComponent} from  '../profile/myorders/myorders.component';
import{MycartComponent} from  '../profile/mycart/mycart.component';
import{SettingsComponent} from  '../profile/settings/settings.component';





 const routes: Routes = [
                          { path: '', component: ProfileComponent, children: [
                            {path: 'myorders', component: MyordersComponent},
                            {path: 'mycart', component: MycartComponent},
                            {path: 'settings', component: SettingsComponent}
                          ]
                        },
                        ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
