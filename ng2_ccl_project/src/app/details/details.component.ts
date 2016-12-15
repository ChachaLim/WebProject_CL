import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

import {AngularFire} from "angularfire2";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  title:"details";
  house;
  //booked = this.house.hoster;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private af: AngularFire
  ) {}

  ngOnInit():void {
    this.route.params
      .switchMap((params:Params)=>this.af.database.object("/houses/"+params['hoster']))
      .subscribe(house => this.house = house);
  }
  goBack():void{
    this.location.back();
  }
  reservation():void{

  }
  update(){
    // this.items.update(key, {booked: });
  }

}
