import { InventoryService } from './../../service/inventory.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {

  name;
  products

  constructor(private route:ActivatedRoute,private router:Router, private s:InventoryService) { }

  ngOnInit(): void {

    
    this.s.getPromotions()
    .subscribe(res=>{
      this.name=res.name;
      this.products=res.products
      console.log(this.products)
    });
      
    

  }

}
