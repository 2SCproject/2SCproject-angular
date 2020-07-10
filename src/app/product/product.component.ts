import { Component, OnInit } from '@angular/core';
declare const plusSlides: any;



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
      plusSlides(-1, 0);
    
   
      plusSlides(1, 0)

  }

  
 

}
