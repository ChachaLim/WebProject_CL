import { Component, OnInit } from '@angular/core';
import { HouseService } from '../house.service';
import {House} from '../House';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  houses: House[] = [];
  constructor(private houseService : HouseService) { }

  ngOnInit() {
      this.houseService.getHouses().then(houses => this.houses = houses);
  }

}
