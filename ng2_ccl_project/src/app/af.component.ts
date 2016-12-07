import {Component} from "@angular/core";
import {FirebaseListObservable, AngularFire} from "angularfire2";
@Component({
  selector:'af',
  template:`
    <p>firebase 연동 부분</p>
    <ul>
        <li *ngFor="let item of items | async">
            {{item.name}}
            {{item.$value}}
        </li>
    </ul>
    <p>-----------------------</p>
  `
})
export class AfApp{
  items: FirebaseListObservable<any[]>;
  constructor(af:AngularFire){
    this.items = af.database.list('https://ang2-912fa.firebaseio.com/');
  }
}
