import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { Order} from '../order';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService  {

  public user;

  constructor(private http: HttpClient) { }

  getOrders(useriD){
    let url="http://localhost:9000/order/"+useriD;
    console.log(url)
    return this.http.get("http://localhost:9000/order/"+useriD)
    
  }
}



