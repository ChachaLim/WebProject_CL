import {Component, OnInit} from '@angular/core';
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {GoogleMapService} from "../GoogleMap.service";
import {FirebaseAuthService} from "../firebaseAuth.service";
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
  image:string;

  user;
  hoster:string;

  location={};


  constructor(af: AngularFire, private gms : GoogleMapService, private auth: FirebaseAuthService) {
    this.items = af.database.list('/houses/');
    this.user = auth.user;
    this.hoster= this.user.name;
    // this.fbGetData();
  }

  //파일 업로드
  onChange(event) {
    this.fileName = event.target.files[0];
    const storageRef2 = firebase.storage().ref('houses/'+this.hoster+'/'+this.fileName.name);
    storageRef2.put(this.fileName);
  }


  onSelect(item: any): void {
    this.selectedItem = item;
    console.log(this.selectedItem.price);
  }
  delete(key) {
    this.items.remove(key);
  }
  update(key, newName, newHoster, newLat, newLng, newPlace, newPrice){
    alert("Image URL : "+this.image);
    this.items.update(key, {name:newName, hoster:newHoster, lat:Number(newLat), lng:Number(newLng), place: newPlace, price: newPrice, imgpath: String(this.image), booked:false});
  }
  geoCode(address){
    this.gms.convertAddressToCooredinate(address).subscribe((res)=>{
      this.location = res.results[0].geometry.location;
      console.log(this.location);
    });
  }

  onKey():void{
    const storageRef = firebase.storage().ref().child('houses/'+this.hoster+'/'+this.fileName.name);
    storageRef.getDownloadURL().then(url=>this.image = url);
  }

  newHouse(newName, newHoster, newLat, newLng, newPlace, newPrice): void {
    alert("Image URL : "+this.image);

    this.items.push({name: newName, hoster: newHoster, lat: Number(newLat), lng: Number(newLng), place: newPlace, price: newPrice, imgpath: String(this.image), booked:false});
    /*imgpath: 'houses/'+newHoster+'/'+this.fileName.name*/
  }
  ngOnInit() {
  }

}
