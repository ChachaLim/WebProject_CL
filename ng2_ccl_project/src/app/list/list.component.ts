import { Component, OnInit } from '@angular/core';
import {House} from "../House";
import {HouseService} from "../house.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  houses: House[] = [];
  constructor(
    private houseService: HouseService,
  ) {}

  ngOnInit(): void {
    this.houseService.getHouses().then(houses => this.houses = houses);
  }
}
