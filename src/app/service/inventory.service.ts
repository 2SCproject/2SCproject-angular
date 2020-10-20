import { Injectable } from '@angular/core';
import { Product} from '../product';
import {map} from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient) { }
  
  getProducts(){
    return this.http.get<Product[]>("https://686153e50db9.ngrok.io/ms-inventory/products").pipe(
      map(response=>response)
    );
  }
}
