import {Component, OnInit} from '@angular/core';
import {HouseService} from "../house.service";
import {House} from "../House";
import {DataService} from "../data.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "homePage";
  houses: House[] = [];
  // houses: FirebaseListObservable<any[]>;
  constructor(
    private houseService: HouseService,
    // private ds:DataService
  ) {}

  ngOnInit(): void {
    this.houseService.getHouses().then(houses => this.houses = houses);
    // this.houses = this.ds.getHouses();
  }


}
