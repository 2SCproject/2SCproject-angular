import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  public val1 : boolean=true;
  public val2 : boolean=true;
  public val3 : boolean=true;
  public val4 : boolean=true;
  public val5 : boolean=true;



  public editname(){
    if (this.val1==true){
      this.val1=false;
    }
  }
  public savename(){
    this.val1=true;
  }


  public editemail(){
    if (this.val2==true){
      this.val2=false;
    }
  }
  public saveemail(){
    this.val2=true;
  }


  public editpassword(){
    if (this.val3==true){
      this.val3=false;
    }
  }
  public savepassword(){
    this.val3=true;
  }

  public editphone(){
    if (this.val4==true){
      this.val4=false;
    }
  }
  public savephone(){
    this.val4=true;
  }

  public editadress(){
    if (this.val5==true){
      this.val5=false;
    }
  }
  public saveadress(){
    this.val5=true;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
