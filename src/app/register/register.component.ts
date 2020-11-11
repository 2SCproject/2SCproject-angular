import { Component, OnInit } from '@angular/core';
import {User} from '../user'
import{RegisterService} from '../service/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
users=[];
constructor(private router:Router,private l:RegisterService) { };

  
  ngOnInit(): void {
    this.l.loaduserfromlocal()

  }
  
  public username="";
  public email="";
  public password="";
  public confirmpassword="";
  OnSubmitAddUsers(user : User){
    console.log(user);
    this.l.addUser(user)
             .subscribe(resnextCour=>{
              
              console.log(resnextCour)
              this.l.addCart(resnextCour.id)
               this.users.push(resnextCour)});

               this.router.navigate(['/profile']);
                 

    
  }

  onLogin(dataForm ){
    this.l.login(dataForm)
    .subscribe(res=>{
      console.log(res);
      let jwt=res.headers.get('Authorization')
      this.l.saveToken(jwt)
    },err=>{})
    console.log("login")
    this.router.navigate(['/']);
  }

  isAdmin(){
    return this.l.isAdmin()
  }

  isUser(){
    return this.l.isUser()
  }

 

  }


