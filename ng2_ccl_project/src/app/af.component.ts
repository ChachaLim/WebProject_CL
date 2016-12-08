import {Component} from "@angular/core";
import {FirebaseListObservable, AngularFire} from "angularfire2";

@Component({
  selector: 'af',
  template: `
    <p>호스터 기능</p>
    <ul>
        <li *ngFor="let item of items | async"
            (click)="onSelect(item)"
            >
            {{item.hoster}}의 {{item.name}}
            <!--{{item.$value}}-->
            <button (click)="delete(item.$key)">x</button>
            
        </li>
    </ul>
    <div *ngIf="selectedItem">
    <label>주택 업데이트</label><br>
      <label>house name</label><input type="text" [(ngModel)]="selectedItem.name"><br>
      <label>hoster name</label><input type="text" [(ngModel)]="selectedItem.hoster"><br>
      <label>house lat</label><input type="text" [(ngModel)]="selectedItem.lat"><br>
      <label>house lng</label><input type="text" [(ngModel)]="selectedItem.lng">
      <button (click)="update(selectedItem.$key,
                             selectedItem.name, 
                             selectedItem.hoster,
                             selectedItem.lat,
                             selectedItem.lng)">Update</button>
      <br />
    </div>
    <br>
    
    <label>주택 추가</label><br>
    <input type="text" [(ngModel)]="name" placeholder="house name"><br>
    <input type="text" [(ngModel)]="hoster" placeholder="hoster name"><br>
    <input type="text" [(ngModel)]="lat" placeholder="latitude"><br>
    <input type="text" [(ngModel)]="lng" placeholder="lngitude">
    <button (click)="newHouse(name, hoster, lat, lng)">Add</button>
    <p>----------------------</p>
  `
})
export class AfApp {
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

  newHouse(newName, newHoster, newLat, newLng): void {
    this.items.push({name: newName, hoster: newHoster, lat: Number(newLat), lng: Number(newLng)});
  }

  delete(key) {
    this.items.remove(key);
  }
  update(key, newName, newHoster, newLat, newLng){
    this.items.update(key, {name:newName, hoster:newHoster, lat:Number(newLat), lng:Number(newLng)});
  }
}
