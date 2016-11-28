import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "homePage";

  houses = [
    {
      hoster:'차영훈',
      price:'250$',
      place:'Busan'
    },
    {
      hoster:'임종식',
      price:'299$',
      place:'부산'
    },
    {
      hoster:'Chris',
      price:'300$',
      place:'NY'
    },
    {
      hoster:'elice',
      price:'500$',
      place:'paris'
    }

  ];

  // @Input() houses;


  selectedHouse = {};
  onSelect(house){
    this.selectedHouse = house;
  }
  constructor() { }

  ngOnInit() {  }

}
