import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "This is home page";

  @Input() houses;


  selectedHouse = {};
  onSelect(house){
    this.selectedHouse = house;
  }


  constructor() { }

  ngOnInit() {  }


}
