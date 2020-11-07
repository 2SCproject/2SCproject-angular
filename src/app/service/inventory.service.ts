import { Injectable } from '@angular/core';
import { Product} from '../product';
import { Category} from '../category';
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
  getProductById(id:string){
    return this.http.get<Product>("http://localhost:8081/products/"+id)
    .pipe(
          map(response=>response)
         );

}
getCategories(){
  return this.http.get<Category[]>("http://localhost:8081/categories").pipe(
    map(response=>response['_embedded'].categories)
  );
}


}

interface products{
  _embedded:{
    appUsers:Product[];
    _links:{self:{href:string}};
  }
}
