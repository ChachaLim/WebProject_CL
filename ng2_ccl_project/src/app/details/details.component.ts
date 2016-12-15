import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {FirebaseListObservable, AngularFire} from "angularfire2";
import { Modal } from 'angular2-modal/plugins/bootstrap';
import {Overlay} from "angular2-modal";
import * as firebase from 'firebase';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  items:FirebaseListObservable<any[]>;
  house;
  path :string;
  image:string;
  booked:boolean;


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private af: AngularFire,
    overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal
  ) {
    this.items = af.database.list('houses');
    this.route.params
      .switchMap((params:Params)=>this.af.database.object("/houses/"+params['hoster']))
      .subscribe(
        house =>
          this.house = house,

        booked =>
          this.house.booked = this.booked
      );

  }

  ngOnInit():void {
    // this.route.params
    //   .switchMap((params:Params)=>this.af.database.object("/houses/"+params['hoster']))
    //   .subscribe(house => this.house = house);
  }
  goBack():void{
    this.location.back();
  }
  reservation():void{
     this.items.update(this.house.$key, {booked: true});
    alert("예약되었습니다.");
  }
  reservationCancel():void{
    this.items.update(this.house.$key, {booked: false});
    alert("예약취소되었습니다.");
  }
  update(){

  }

}
