import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {InventoryService} from '../service/inventory.service';
import { Category} from '../category';
import{ActivatedRoute}from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories=[];
  products: Array<Category>;

 

  constructor(private route:ActivatedRoute,private router:Router, private s:InventoryService) { }

  ngOnInit()  {
    
  
  }
  opencategories(){
    this.s.getCategories().subscribe(resCategories => this.products=resCategories);
  }

}
