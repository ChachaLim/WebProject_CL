import { Component, OnInit } from '@angular/core';
import {FirebaseListObservable, AngularFire} from "angularfire2";
import * as firebase from 'firebase';

@Component({
  selector: 'app-hoster',
  templateUrl: './hoster.component.html',
  styleUrls: ['./hoster.component.css']
})
export class HosterComponent implements OnInit {
  items: FirebaseListObservable<any[]>;
  selectedItem: any;
  fileName;
  hoster:string;
  image:string;


  constructor(af: AngularFire) {
    this.items = af.database.list('/houses/');
    // this.fbGetData();
  }
  onKey():void{
    const storageRef = firebase.storage().ref().child('houses/'+this.hoster+'/'+this.fileName.name);
    storageRef.getDownloadURL().then(url=>this.image = url);
  }
  onChange(event) {
    this.fileName = event.target.files[0];
    const storageRef2 = firebase.storage().ref('houses/'+this.hoster+'/'+this.fileName.name);
    storageRef2.put(this.fileName);
  }

  newHouse(newName, newHoster, newLat, newLng, newPlace, newPrice): void {
    // this.fileName = event.target.files[0];
    // const storageRef2 = firebase.storage().ref('houses/'+this.hoster+'/'+this.fileName.name);
    // var uploadTask = storageRef2.put(this.fileName);
    alert("done"+this.image);

      this.items.push({name: newName, hoster: newHoster, lat: Number(newLat), lng: Number(newLng), place: newPlace, price: newPrice, imgpath: String(this.image), booked:false});
    /*imgpath: 'houses/'+newHoster+'/'+this.fileName.name*/
  }
  onSelect(item: any): void {
    this.selectedItem = item;
    console.log(this.selectedItem.price);
  }
  delete(key) {
    this.items.remove(key);
  }
  update(key, newName, newHoster, newLat, newLng, newPlace, newPrice){

    this.items.update(key, {name:newName, hoster:newHoster, lat:Number(newLat), lng:Number(newLng), place: newPlace, price: newPrice, booked: false});
  }
  ngOnInit() {
  }

}
