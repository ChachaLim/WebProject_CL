import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {LatLngLiteral} from "angular2-google-maps/core";

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
})
export class MapsComponent implements OnInit {
  items: FirebaseListObservable<any[]>;


  default_lat: number = 37.575970;
  default_lng: number = 126.957694;
  constructor(
    private router : Router,
    private af: AngularFire
  ) {
  this.items = af.database.list('/houses/');
}


ngOnInit(): void {
}

//마커 클릭 이벤트
mc(house:any): void {
this.router.navigate(['/details', house.$key]);
}


}
