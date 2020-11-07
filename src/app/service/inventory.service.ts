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
    return this.http.get<Product[]>("http://localhost:8081/products").pipe(
      map(response=>response['_embedded'].products)
    );
  }


}

interface products{
  _embedded:{
    appUsers:Product[];
    _links:{self:{href:string}};
  }
}
