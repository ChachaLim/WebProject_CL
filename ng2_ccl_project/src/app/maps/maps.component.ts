import {Component, OnInit, NgZone, Injectable} from '@angular/core';
import {HouseService} from "../house.service";
import {House} from "../House";
import {Router} from "@angular/router";
import {GoogleMapsAPIWrapper} from "angular2-google-maps/core";
import {DataService} from "../data.service";
import {FirebaseListObservable} from "angularfire2";

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
})
export class MapsComponent implements OnInit {

  title: string = 'google maps';
  houses: House[] = [];
  // houses: FirebaseListObservable<any[]>;

  angle_lat: number = 37.575970;
  angle_lng: number = 126.957694;

  constructor(
    private houseService: HouseService,
    // private ds: DataService,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.houseService.getHouses().then(houses => this.houses = houses);
    // this.houses = this.ds.getHouses();
  }

  //마커 클릭 이벤트
  mc(house:House): void {
    this.router.navigate(['/details', house.hoster]);
  }

}
