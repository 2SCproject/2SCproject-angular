import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {InventoryService} from '../service/inventory.service';
import {SharedataService} from '../service/sharedata.service'
import { Category} from '../category';
import {Product} from '../product'
import{ActivatedRoute}from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  categories: Array<Category>;

 

  constructor(private route:ActivatedRoute,private router:Router, private s:InventoryService, private share:SharedataService) { }
  value:string;
  productsearch:Array<Product>;
  message="welcome ikhlas";
  ngOnInit()  {  
  }

  opencategories(){
    this.s.getCategories().subscribe(resCategories => this.categories=resCategories);
    console.log(this.categories);
  }

  OnSubmitSearchProduct(value){
    console.log("zone");
    this.s.getProductByname(value)
    .subscribe((resCours) =>this.productsearch=resCours);
    console.log(value)
    this.share.setData(this.productsearch);
    this.router.navigate(['/product/search'])}
}
