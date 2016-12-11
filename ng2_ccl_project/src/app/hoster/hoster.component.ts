import { Component, OnInit } from '@angular/core';
import {FirebaseListObservable, AngularFire} from "angularfire2";

@Component({
  selector: 'app-hoster',
  templateUrl: './hoster.component.html',
  styleUrls: ['./hoster.component.css']
})
export class HosterComponent implements OnInit {
  items: FirebaseListObservable<any[]>;
  selectedItem: any;

  constructor(af: AngularFire) {
    this.items = af.database.list('/');
    // this.fbGetData();
  }

  onSelect(item: any): void {
    this.selectedItem = item;
    console.log(this.selectedItem.price);
  }

  newHouse(newName, newHoster, newLat, newLng, newPlace, newPrice): void {
    this.items.push({name: newName, hoster: newHoster, lat: Number(newLat), lng: Number(newLng), place: newPlace, price: newPrice});
  }

  delete(key) {
    this.items.remove(key);
  }
  update(key, newName, newHoster, newLat, newLng, newPlace, newPrice){
    this.items.update(key, {name:newName, hoster:newHoster, lat:Number(newLat), lng:Number(newLng), place: newPlace, price: newPrice});
  }

  ngOnInit() {
  }

}
