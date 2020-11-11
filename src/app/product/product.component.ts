import { HttpClient } from '@angular/common/http';
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

  constructor(private u:RegisterService,private http:HttpClient,private route:ActivatedRoute,private router:Router, private S:InventoryService) { }
  products: Array<Product>;
 
  ngOnInit(): void {
    
    var id=this.route.snapshot.paramMap.get('id');
    console.log(id)
    this.courId=id;
    this.S.getProductById(id)
    .subscribe(res=>{
      this.courId=res.idProduct
      console.log(res.idProduct)
      this.name=res.name; this.description=res.descreption;this.price=res.price;console.log(res)});
      plusSlides(-1, 0);
      plusSlides(1, 0);
      this.S.getProducts().subscribe(resProducts => this.products=resProducts);
     
      

  }
   add_to_card(courId,price){
    let item ={"prodductId":courId,"quantity":1,"subTotal":price}
    this.http.post("http://localhost:9000/item/"+courId,item).subscribe(res=>
    {
      console.log(res)
      
      this.http.post("http://localhost:9000/addItem/"+this.u.userAuth.id,null).subscribe(res=>
        console.log("")
    )
    })
  }
  buyproduct(){

    this.router.navigate(['/order',this.courId])
  }
  Ongetproduct(p){
     var id=this.route.snapshot.paramMap.get('id');
    this.courId=id;
     this.S.getProductById(id)
     .subscribe(res=>{this.name=res.name; this.description=res.descreption;this.price=res.price;console.log(res)});
  }


  
  

  
 

}
