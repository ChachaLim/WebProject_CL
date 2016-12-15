import {Component, OnInit} from '@angular/core';
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {GoogleMapService} from "../GoogleMap.service";
import {FirebaseAuthService} from "../firebaseAuth.service";
@Component({
  selector: 'app-host-controll',
  templateUrl: './host-controll.component.html',
  styleUrls: ['./host-controll.component.css'],
})
export class HostControllComponent implements OnInit {
  items:FirebaseListObservable<any[]>;
  selectedItem: any;
  filteredItems;
  location = {};
  user;
  userName:string;
  constructor(af: AngularFire, private gms : GoogleMapService, private auth: FirebaseAuthService) {
    this.items = af.database.list('houses');
    this.user = auth.user;
    this.userName = this.user.name;
    this.filteredItems = af.database.list('houses',{query:{orderByChild:'hoster', equalTo: this.userName }});
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
  geoCode(address){
    this.gms.convertAddressToCooredinate(address).subscribe((res)=>{
      this.location = res.results[0].geometry.location;
      console.log(this.location);
    });
  }
  ngOnInit() {

  }


}
