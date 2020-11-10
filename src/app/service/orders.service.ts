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
    let url="https://ccfefbe4ee57.ngrok.io/order/"+useriD;
    console.log(url)
    return this.http.get("https://ccfefbe4ee57.ngrok.io/order/"+useriD)
    
  }
}



