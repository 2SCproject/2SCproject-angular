import { Injectable } from '@angular/core';
import {Product} from '../product';

@Injectable({
  providedIn: 'root'
})
export class SharedataService {
  product:Array<Product>

  constructor() { }
  setData(data){
    this.product=data;
  }
  getData(){
    return this.product;
  }
}
