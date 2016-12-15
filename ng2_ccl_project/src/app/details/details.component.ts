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
  path :string;
  image:string;
  // lat=12;
  // lng=123;

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

}
