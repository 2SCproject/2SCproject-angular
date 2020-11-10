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
    return this.http.get<Product[]>("https://f30e72d76e81.ngrok.io/products").pipe(
      map(response=>response['_embedded'].products)
    );
  }
  getProductById(id:string){
    return this.http.get<Product>("https://f30e72d76e81.ngrok.io/products/"+id)
    .pipe(
          map(response=>response)
         );

}
getCategories(){
  return this.http.get<Category[]>("https://f30e72d76e81.ngrok.io/categories").pipe(
    map(response=>response['_embedded'].categories)
  );
}

getCatecory(){
  return this.http.get<Category[]>("https://f30e72d76e81.ngrok.io/categories").pipe(
    map(response=>response['_embedded'].categorie)
  );
}

getProductByname(name:string){
  let headers= new HttpHeaders ({
   'Content-Type': 'application/json',
 });
 let options = {
   headers:headers
 }
  console.log("done");
  return this.http.get<Product[]>("https://f30e72d76e81.ngrok.io/product/"+name,options)
   .pipe(
         map(response=>response)
        );
 }


}

interface products{
  _embedded:{
    appUsers:Product[];
    _links:{self:{href:string}};
  }
}
