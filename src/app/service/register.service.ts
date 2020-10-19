import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import {User} from '../user'
import {Observable,of, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) {}
  addUser(user:User){
   
    let headers= new HttpHeaders ({
        'Content-Type': 'application/json',
    });
    let options = {
        headers:headers
    }
    return this.http.post<User[]>("http://localhost:7777//ms-auth/register",JSON.stringify(user),options)
    .pipe(
        map(response=>response)
    );   
}
login(login:String){
  return this.http.get<User>("http://localhost:7777//ms-auth/user/"+login)
  .pipe(
    map(response=>response)
   );

}
}
