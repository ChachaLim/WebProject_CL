import {Component, OnInit} from '@angular/core';
import {HouseService} from "../house.service";
import {House} from "../House";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "homePage";
  houses: House[] = [];

  constructor(
    private houseService: HouseService,
  ) {}

  ngOnInit(): void {
    this.houseService.getHouses().then(houses => this.houses = houses);
  }


}
