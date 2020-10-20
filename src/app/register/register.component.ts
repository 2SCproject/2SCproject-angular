import { Component, OnInit } from '@angular/core';
import {User} from '../user'
import{RegisterService} from '../service/register.service';
import {ToastrService} from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
users=[];
constructor(private router:Router,private l:RegisterService,public toastr:ToastrService) { };

  ngOnInit(): void {
  }
  user: any;
  public username="";
  public email="";
  public password="";
  public confirmpassword="";
  public emaill="";
  public passwordl="";
  OnSubmitAddUsers(user : User){
    console.log(user);
    this.l.addUser(user)
             .subscribe(resnextCour=>this.users.push(resnextCour));
             this.router.navigate(['/profile']);
             
  }
  login(){
    this.l.login(this.emaill)
          .subscribe(response=>{this.user=response;
            if (this.user.psw=this.passwordl){
              this.router.navigate(["/"]);
            }else{
              this.toastr.warning('password incorrect')
            }

          },error=>
          this.toastr.warning('login incorrect')
          ); 
  }

  }


