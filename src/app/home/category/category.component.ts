import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {InventoryService} from '../../service/inventory.service';
import { Product} from '../../product';
import { Category} from '../../category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  
  name;
  products: Array<Product>;
  id;

  constructor(private route:ActivatedRoute,private router:Router, private s:InventoryService) { }

  ngOnInit() {

    this.s.getProductById(id)
    .subscribe(res=>{this.name=res.name;console.log(res)});
      
    
    this.s.getProducts().subscribe(resProducts => this.products=resProducts);

    var id=this.route.snapshot.paramMap.get('id');
    this.name=id;
    
     

    /*
    this.s.getProducts(id).subscribe(resProducts => this.products=resProducts);
    */
  }

}
