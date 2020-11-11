import { RegisterService } from './../service/register.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {InventoryService} from '../service/inventory.service';
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
  userauth
 

  constructor(private u:RegisterService,private route:ActivatedRoute,private router:Router, private s:InventoryService) { }
  value:string;
  Products:Array<Product>;
  productsearch:any;
  message="welcome ikhlas";
  ngOnInit()  {
    console.log("22")
    this.s.getCategories().subscribe(resCategories =>{

      
      console.log(this.userauth)
     this.categories=resCategories;
    console.log(this.categories)
    console.log(this.userauth)
    this.userauth=this.u.userAuth
    })
  
  }

  opencategories(){
    this.s.getCategories().subscribe(resCategories => this.categories=resCategories);
    console.log(this.categories);
  }

  OnSubmitSearchProduct(value){
    /*console.log("zone");
    this.s.getProductByname(value.value)
    .subscribe((resCours) =>{console.log(resCours),this.productsearch=resCours});
    
    console.log(value.value)
    this.share.setData(this.productsearch);
    console.log(this.productsearch)
    this.router.navigate(['/product/search'])}*/
    console.log(value.value)
    if(!value.value) this.productsearch="";
    else{
    this.s.getProductByname(value.value)
    .subscribe(resCours =>
      {this.productsearch=resCours});

  } 
}
    

}