import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileRoutingModule } from '../profile/profile-routing.module';
import {FormsModule} from '@angular/forms';
import {ProfileComponent} from './profile.component'
import { MyordersComponent } from './myorders/myorders.component';
import { MycartComponent } from './mycart/mycart.component';
import { SettingsComponent } from './settings/settings.component';





@NgModule({
  declarations: [
   ProfileComponent,
   MyordersComponent,
   MycartComponent,
   SettingsComponent,
   
   
  ],
  imports: [
    ProfileRoutingModule,
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class ProfileModule { }
