import { Component, OnInit } from '@angular/core';
import {House} from "../House";
import {HouseService} from "../house.service";
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  houses: FirebaseListObservable<any[]>;
  constructor(
    private af: AngularFire
  ) {
    this.houses = af.database.list('/');
  }

  ngOnInit(): void {
  }
}
