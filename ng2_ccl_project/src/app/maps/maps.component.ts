import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  title: string = 'google maps';

  LatLng: any[] = [
    {
      //서울
      name:"서울",
      lat: 37.575970,
      lng: 126.957694
    },
    {
      name:"부산 현대 무지개 아파트",
      lat: 35.145319,
      lng: 129.005662
    },
    {
      name:"부산 럭키 주례아파트",
      lat: 35.148165,
      lng: 129.003375
    },
    {
      name:"뉴욕 매트로테크 센터",
      lat: 40.692577,
      lng: 73.984618
    },
    {
      name:"파리 카우텀 카페",
      lat: 48.851596,
      lng: 2.318030
    }
  ]

  //마커 클릭 이벤트
  mc(place):void{
    alert(place);
  }
  constructor() {
  }

  ngOnInit() {
  }

}
