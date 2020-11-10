import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Product} from '../product';
import {InventoryService} from'../service/inventory.service';
import {RegisterService} from '../service/register.service'
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
  //form
  public userId;
  public fn;
  public ln;
  public un;
  public m;
  public p;
  public ad;

  constructor(private route:ActivatedRoute,private router:Router, private S:InventoryService, private l:RegisterService) { }

  ngOnInit(): void {
    var id=this.route.snapshot.paramMap.get('id');
    this.courId=id;
    this.S.getProductById(id)
    .subscribe(res=>{this.name=res.name; this.description=res.descreption;this.price=res.price;console.log(res)});

    
    if(this.l.userAuth){
      console.log(this.l.userAuth)
      this.fn=this.l.userAuth.firstname;
       this.ln=this.l.userAuth.lastname;
       this.m=this.l.userAuth.email;
       this.un=this.l.userAuth.username;
       this.p=this.l.userAuth.phonenumber
        console.log(this.l.userAuth.firstname)
      }
      
      //);
    

}onSubmit(myform){}
}
