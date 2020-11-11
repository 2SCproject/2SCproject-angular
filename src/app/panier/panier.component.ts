import { RegisterService } from './../service/register.service';
import { InventoryService } from './../service/inventory.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  panier;
  items;
  total
  id;
  constructor(private u:RegisterService,private http:HttpClient,private route:ActivatedRoute,private router:Router, private S:InventoryService) { }

  ngOnInit(): void {

    this.http.get("http://localhost:9000/cart/"+this.u.userAuth.id).subscribe(res=>
    {
      console.log(res)
      this.items=res.items
      this.total=res.totalPrice
      this.id=res.id
    
    })
  }

}
