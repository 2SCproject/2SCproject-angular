import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { Order} from '../order';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  getOrders(){
    return this.http.get<Order[]>("http://localhost:9000/userorders")
    .pipe(
          map(response=>response['_embedded'].userorders)
         );
}

}



interface userorders{
  _embedded:{
    userorders:Order[];
    _links:{self:{href:string}};
  }
}
