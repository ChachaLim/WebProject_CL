import { Component, OnInit } from '@angular/core';
import { GoogleMapService } from '../GoogleMap.service';

@Component({
  selector: 'app-test',
  styleUrls: ['./test.component.css'],
  template: `
    주소입력
    <input type="text"  [(ngModel)]="address">
    <button (click)="geoCode(address)">주소찾기</button>
    위도: {{location.lat}} 경도: {{location.lng}}
        
`
})
export class TestComponent implements OnInit {
  location = {};
  address;
  constructor(private gms : GoogleMapService) {
    // this.gms.convertAddressToCooredinate('밀양시 삼문동').subscribe((res)=>{
    //   this.location = res.results[0].geometry.location;
    //   console.log(this.location);
    // });
  }
  geoCode(address){
    this.gms.convertAddressToCooredinate(address).subscribe((res)=>{
      this.location = res.results[0].geometry.location;
      console.log(this.location);
    });
  }
  ngOnInit() {

  }


}
