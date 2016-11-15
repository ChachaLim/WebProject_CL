import {Component} from '@angular/core';


@Component({
    selector: 'app',
    template: `
        <ul>
            <li *ngFor="let home of homes"
                (click)="onSelect(home)"
                [class.clicked]="selectedHome===home">
                {{home.hoster}}의 집
            </li>
        </ul>
        <div>
            위치 : {{selectedHome.location}}<br>
            가격 : {{selectedHome.price}}
        </div>
  `,
    styleUrls: ["../../app.css"]
})
export class AppComponent {
    public homes = [
        {hoster: "Cha YeongHun", location: "busan", price: "300$"},
        {hoster: "Chris", location: "paris", price: "299$"},
        {hoster: "Michael", location: "NY", price: "350$"}
    ]
    public selectedHome = {};
    onSelect(home) {
        this.selectedHome = home;
    }
}
