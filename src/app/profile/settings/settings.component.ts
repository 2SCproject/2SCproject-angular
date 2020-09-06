import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  public val : boolean=true;
  public edit(){
    if (this.val==true){
      this.val=false;
    }
  }

  public save(){
    this.val=true;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
