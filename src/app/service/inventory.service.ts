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
    return this.http.get<Product[]>("https://81b9b6d81d55.ngrok.io/products").pipe(
      map(response=>response['_embedded'].products)
    );
  }
  getProductById(id:string){
    return this.http.get<Product>("https://81b9b6d81d55.ngrok.io//products/"+id)
    .pipe(
          map(response=>response)
         );

}
getCategories(){
  return this.http.get<Category[]>("https://81b9b6d81d55.ngrok.io/categories")
  
}

getCatecory(id){
  return this.http.get<Category[]>("https://81b9b6d81d55.ngrok.io/categories/"+id)
}

getProductByname(name:string){
  
  return this.http.get("https://81b9b6d81d55.ngrok.io/product/"+name)
   
 }
 
 





}

interface products{
  _embedded:{
    appUsers:Product[];
    _links:{self:{href:string}};
  }
}
