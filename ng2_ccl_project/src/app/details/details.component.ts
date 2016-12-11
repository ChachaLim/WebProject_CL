import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from '@angular/common';

import {House} from "../House";
import {HouseService} from "../house.service";
import 'rxjs/add/operator/switchMap';

import {FirebaseListObservable, AngularFire} from "angularfire2";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  title:"details";

  // house: House;
  // house: FirebaseListObservable<any[]>;
  house;
  constructor(
    private houseService: HouseService,
    private route: ActivatedRoute,
    private location: Location,
    private af: AngularFire
  ) {
    // this.house = this.af.database.list("/"+params['hoster']);
  }

  ngOnInit():void {
    this.route.params
      .switchMap((params:Params)=>this.af.database.object("/houses/"+params['hoster']))
      .subscribe(house => this.house = house);
  }
  goBack():void{
    this.location.back();
  }

}
