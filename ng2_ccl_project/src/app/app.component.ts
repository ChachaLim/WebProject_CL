import {Component} from '@angular/core';
import {HouseService} from "./house.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //templateUrl: '<h1>{{title}}</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = "airbnb";
}
