import {Component} from '@angular/core';
import {HouseService} from "./house.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = "airbnb";
  constructor(private router: Router){}
  onClick():void{
    this.router.navigate(['']);
  }
}
