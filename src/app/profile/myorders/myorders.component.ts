import { Component, OnInit } from '@angular/core';
import { Order} from '../../order';
import {Router} from '@angular/router';
import {OrdersService} from '../../service/orders.service';
import {RegisterService} from '../../service/register.service';


@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {


  orders:Array<Order>;
  id;
  totalPrice;
  userId;

  constructor(private router:Router,  private s:OrdersService,private l:RegisterService ) { }

  ngOnInit() {
    console.log(this.l.userAuth)
    if(this.l.userAuth){
    this.s.getOrders(this.l.userAuth.id)
    .subscribe(resOrders => {
      console.log(resOrders)
      this.id=resOrders.id
      this.totalPrice=resOrders.totalPrice
      this.userId=resOrders.userId
      this.orders=resOrders.userorders
    });
  }
    

    

  }

}
