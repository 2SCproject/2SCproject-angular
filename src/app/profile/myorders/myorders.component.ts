import { Component, OnInit } from '@angular/core';
import { Order} from '../../order';
import {Router} from '@angular/router';
import {OrdersService} from '../../service/orders.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {

  orders:Array<Order>;

  constructor(private router:Router,  private s:OrdersService) { }

  ngOnInit() {
    this.s.getOrders()
    .subscribe(resOrders =>this.orders=resOrders);
    

  }

}
