import {Component, OnInit} from '@angular/core';
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-host-controll',
  templateUrl: './host-controll.component.html',
  styleUrls: ['./host-controll.component.css'],
})
export class HostControllComponent implements OnInit {
  items:FirebaseListObservable<any[]>;
  selectedItem: any;
  filteredItems;
  constructor(af: AngularFire) {
    this.items = af.database.list('houses');
    this.filteredItems = af.database.list('houses',{query:{orderByChild:'hoster', equalTo: "임종식" }});

  }

  // filter(item : any): boolean{
  //   if(item.hoster=== "임종식") return true;
  //   return false;
  // }

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
    //this.filterItems = this.af.database.list("/houses/",{query: {orderByChild : "hoster", equalTo:this.hoster}})
  }


}
