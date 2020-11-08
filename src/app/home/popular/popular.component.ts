import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import {InventoryService} from '../../service/inventory.service';
import { Product} from '../../product';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  @Input() data:string;
  products: Array<Product>;
  

  constructor(private router:Router, private s:InventoryService) { }

  ngOnInit() {
    this.s.getProducts().subscribe(resProducts => this.products=resProducts);
  }
  Ongetproduct(p){
    console.log(p.idProduct);
    console.log("product");
    console.log(p);
    
    this.router.navigate(['/product',p._id])
  }

}
