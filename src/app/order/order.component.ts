import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Product} from '../product';
import {InventoryService} from'../service/inventory.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public courId;
  public name;
  public description;
  public price;
  constructor(private route:ActivatedRoute,private router:Router, private S:InventoryService) { }

  ngOnInit(): void {
    var id=this.route.snapshot.paramMap.get('id');
    this.courId=id;
    this.S.getProductById(id)
    .subscribe(res=>{this.name=res.name; this.description=res.descreption;this.price=res.price;console.log(res)});

}}
