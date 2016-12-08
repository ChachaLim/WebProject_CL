import {Component, OnInit} from '@angular/core';
import {HouseService} from "../house.service";
import {House} from "../House";
import {Router} from "@angular/router";
import {DataService} from "../data.service";
import {FirebaseListObservable, AngularFire} from "angularfire2";


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
})
export class MapsComponent implements OnInit {

  title: string = 'google maps';
  houses: House[] = [];
  // houses: FirebaseListObservable<any[]>;
  items: FirebaseListObservable<any[]>;

  default_lat: number = 37.575970;
  default_lng: number = 126.957694;

  constructor(
    private houseService: HouseService,
    // private ds: DataService,
    private router : Router,
    private af: AngularFire
  ) {
  this.items = af.database.list('/');
}


ngOnInit(): void {
this.houseService.getHouses().then(houses => this.houses = houses);
// this.houses = this.ds.getHouses();
}

//마커 클릭 이벤트
mc(house:House): void {
this.router.navigate(['/details', house.hoster]);
}


}
