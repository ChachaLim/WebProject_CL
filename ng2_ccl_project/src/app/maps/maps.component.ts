import {Component, OnInit, NgZone, Injectable} from '@angular/core';
import {HouseService} from "../house.service";
import {House} from "../House";
import {Router} from "@angular/router";
import {GoogleMapsAPIWrapper} from "angular2-google-maps/core";

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  title: string = 'google maps';

  // LatLng: any[] = [
  //   {
  //     //서울
  //     name:"서울",
  //     lat: 37.575970,
  //     lng: 126.957694
  //   },
  //   {
  //     name:"부산 현대 무지개 아파트",
  //     lat: 35.145319,
  //     lng: 129.005662
  //   },
  //   {
  //     name:"부산 럭키 주례아파트",
  //     lat: 35.148165,
  //     lng: 129.003375
  //   },
  //   {
  //     name:"뉴욕 매트로테크 센터",
  //     lat: 40.692577,
  //     lng: 73.984618
  //   },
  //   {
  //     name:"파리 카우텀 카페",
  //     lat: 48.851596,
  //     lng: 2.318030
  //   }
  // ]
  houses: House[] = [];

  angle_lat: number = 37.575970;
  angle_lng: number = 126.957694;

  @Injectable
  constructor(
    private houseService: HouseService,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.houseService.getHouses().then(houses => this.houses = houses);
  }

  //마커 클릭 이벤트
  mc(house:House): void {
    this.router.navigate(['/details', house.hoster]);
  }

}
