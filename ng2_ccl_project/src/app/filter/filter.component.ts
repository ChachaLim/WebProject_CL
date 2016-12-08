import { Component, OnInit } from '@angular/core';
import { HouseService } from '../house.service';
import {House} from '../House';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  Title : String = "filtering";
  houses: House[] = [];
  constructor(
    private houseService : HouseService,
  ){}

  ngOnInit() {
    //houseservice라는 객체를 생성하는거고 그 객체의 함수 getHouses()에서 .then()은또뭐야
    //then을 통해서 this.house 변수가 = houses가 된다...
    //houses(export class의 houses) => this.houses() = houses(houseService의 houses)
      this.houseService.getHouses().then(houses => this.houses = houses);
  }

}
