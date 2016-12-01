import { Component, OnInit } from '@angular/core';
import {House} from "../House";
import {HouseService} from "../house.service";
import {ActivatedRoute, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  title:"details"

  house: House;

  constructor(
    private houseService: HouseService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit():void {
    this.route.params
      .switchMap((params:Params)=>this.houseService.getHouse(params['hoster']))
      .subscribe(house => this.house = house);
  }

}
