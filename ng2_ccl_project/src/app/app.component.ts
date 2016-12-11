import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {Auth} from "./auth.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Auth]
})
export class AppComponent{
  title = "airbnb";
  constructor(private router: Router, private auth:Auth){}
  onClick():void{
    this.router.navigate(['']);
  }
}
