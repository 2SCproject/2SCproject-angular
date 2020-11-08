import { Component, OnInit } from '@angular/core';
import {SharedataService} from '../service/sharedata.service';
import {Product} from '../product'

@Component({
  selector: 'app-productsearch',
  templateUrl: './productsearch.component.html',
  styleUrls: ['./productsearch.component.css']
})
export class ProductsearchComponent implements OnInit {
  products:Array<Product>

  constructor(private share:SharedataService) { }

  ngOnInit(): void {
    this .share.getData();
  }

}
