import {Component} from "@angular/core";
import {Homes} from  '../../../both/collections/homes.collection';
import {Observable} from "rxjs/Observable";
import {Home} from "../../../both/models/home.model";

@Component({
    selector: 'app',
    template: `
        <ul>
            <li *ngFor="let home of homes | async">
                <div>
                    <h3>{{home.hoster}}의 집</h3>
                    <p>위치 : {{home.location}}</p>
                    <p>가격 : {{home.price}}</p>
                </div>
            </li>
        </ul>
  `,
})
export class AppComponent {
    /*
     * Observable:식별자 Home[]타입을 식별하여 homes에 삽입
     *
     */
    homes: Observable<Home[]>;

    constructor() {
        this.homes = Homes.find({}).zone(); //zone() method : Observable에 존재하는 method로서 collection을 연결하고 변화를 감지함.
    }
}
