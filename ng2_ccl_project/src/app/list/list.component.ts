import { Component, OnInit } from '@angular/core';
import {FirebaseListObservable, AngularFire} from "angularfire2";
import * as firebase from 'firebase';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  path :string;
  image:string;
  houses: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire){
    this.houses = af.database.list('/houses/');

    // const storageRef = firebase.storage().ref().child('houses/qq/pool.jpg');
    // storageRef.getDownloadURL().then(url=>this.image = url);
    // this.path = storageRef.fullPath;
  }
  onClick(path:string):void{
    const storageRef = firebase.storage().ref().child(path);
    storageRef.getDownloadURL().then(url=>this.image = url);
    this.path = storageRef.fullPath;
  }

  ngOnInit(): void {
  }

}
