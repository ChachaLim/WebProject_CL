import { Component, OnInit } from '@angular/core';
import {FirebaseListObservable, AngularFire} from "angularfire2";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  houses: FirebaseListObservable<any[]>;
  constructor(private af: AngularFire){
    this.houses = af.database.list('/houses/');
  }

  ngOnInit(): void {
  }

}
