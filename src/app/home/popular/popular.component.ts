import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {InventoryService} from '../../service/inventory.service';
import { Product} from '../../product';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  products: Array<Product>;

  constructor(private router:Router, private s:InventoryService) { }

  ngOnInit() {
    this.s.getProducts().subscribe(resProducts => this.products=resProducts);
  }

}
