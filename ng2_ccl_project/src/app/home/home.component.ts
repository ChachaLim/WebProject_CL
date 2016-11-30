import {Component, OnInit} from '@angular/core';
import {HouseService} from "../house.service";
import {House} from "../House";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HouseService]
})
export class HomeComponent implements OnInit {
  homeTitle = "homePage";
  houses: House[];

  constructor(private houseService: HouseService) {}

  getHouses(): void {
    this.houses = this.houseService.getHouses();
  }

  ngOnInit(): void {
    this.getHouses();
  }

  selectedHouse = {};

  onSelect(house) {
    this.selectedHouse = house;
  }


}
