import {Component} from "@angular/core";
import {FirebaseListObservable, AngularFire} from "angularfire2";

@Component({
  selector: 'af',
  template: `
    <p>firebase 연동 부분</p>
    <ul>
        <li *ngFor="let item of items | async"
            (click)="onSelect(item)"
            >
            {{item.name}}
            {{item.$value}}
        </li>
    </ul>
    <div *ngIf="selectedItem">
    <input type="text" [(ngModel)]="selectedItem.name">
    </div>
    <br />
    <button (click)="delete()">Delete</button>
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

  delete() {
    this.items.remove('/4');
  }
}
