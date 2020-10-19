import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SerService} from '../ser.service';
import { Course} from '../course';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
