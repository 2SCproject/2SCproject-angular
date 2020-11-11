import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import {User} from '../user'
import {Observable,of, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {map} from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  public isAuth:boolean;
  public userAuth;
  public jwt;
  username:string;
  roles:Array<string>
  public id ;

  constructor(private http:HttpClient) {}

  addUser(user:User){
   
    let headers= new HttpHeaders ({
        'Content-Type': 'application/json',
    });
    let options = {
        headers:headers
    }
    
    
    
    

  return this.http.post<User[]>("http://localhost:3000/register",JSON.stringify(user),options)
}

addCart(user){
  console.log(user)
  this.http.post("http://localhost:9000/cart",{"userId":user,"totalPrice":0}).subscribe(res=>
  console.log(res))
}

  getUser(){
    return this.http.get("http://localhost:3000/user/" + this.username);
  }
  getUserById(id:string){
    return this.http.get<User>("http://localhost:3000/appUsers/" +id)
    .pipe(
      map(response=>response)
     );
  }
 



public login(data){
  return this.http.post("http://localhost:3000/login",data,{observe:'response'})

}
public saveToken(jwt:string){

    
    this.jwt=jwt
    localStorage.setItem('token',jwt)  
    this.parseJWT();
    this.isAuth=true
}

parseJWT(){
  let jwtHelper=new JwtHelperService();
  let objJWT=jwtHelper.decodeToken(this.jwt);
  
  this.username=objJWT.username
  this.getUser().subscribe(res=>{
    console.log(res)
    this.userAuth=res
    console.log("ggg")
    console.log(this.userAuth)
  })
  this.roles=objJWT.roles

}

isAdmin(){
  return this.roles.indexOf('ADMIN')>=0;
}

isUser(){
  return this.roles.indexOf('USER')>=0;
}

isAUthenticated(){
  return this.roles && (this.isAdmin() || this.isUser)
}

public loaduserfromlocal(){
  let t =localStorage.getItem('authToken')
  if(t){
    let user=JSON.parse(atob(t));
    this.userAuth={username:user.username,roles:user.roles}
    this.isAuth=true
    this.jwt=t;
  }
}

public removeTokenFromlocalstorage(){
  localStorage.removeItem('authToken')
  this.isAuth=false
  this.jwt=undefined
  this.userAuth=undefined
}

}
