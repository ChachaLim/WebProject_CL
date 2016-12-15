import { Component, OnInit } from '@angular/core';
import {Auth} from "../auth.service";

@Component({
  selector: 'app-auto-login',
  templateUrl: './auto-login.component.html',
  styleUrls: ['./auto-login.component.css'],
  providers : [Auth]
})
export class AutoLoginComponent implements OnInit {

  constructor(private  auth: Auth) { }

  ngOnInit() {
  }

}
