import { Component, OnInit } from '@angular/core';
declare const plusSlides: any;
import { ActivatedRoute, Router } from '@angular/router';
import {Product} from '../product';
import {InventoryService} from'../service/inventory.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public courId;
  public name;
  public description;
  public price;


  constructor(private route:ActivatedRoute,  private S:InventoryService) { }

  ngOnInit(): void {
    var id=this.route.snapshot.paramMap.get('id');
    this.courId=id;
    this.S.getProductById(id)
    .subscribe(res=>{this.name=res.name; this.description=res.descreption;this.price=res.price;console.log(res)});
      plusSlides(-1, 0);
    
   
      plusSlides(1, 0)

  }
   add_to_card(){
   
  }

  
 

}
