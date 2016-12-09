import { Component, OnInit } from '@angular/core';
import { HouseService } from '../house.service';
import {House} from '../House';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  Title : String = "filtering";
  houses: House[] = [];
  housesfilter : House[] = [];
  inputHouseName: String;
  constructor(
    private houseService : HouseService,
  ){}

  onkey(event:any){
    console.log("test");
    this.houseService.getFilterHouse(event.target.value).then(housesfilter => this.housesfilter = housesfilter);

  }
  ngOnInit() {
      this.houseService.getHouses().then(houses => this.houses = houses);
  }

}

// transform(houses: any, term: any): any {
//   //check if search term is undefined
//   if(term === undefined) return houses;
//   //return updated hosese array
//   return houses.filter(function(house){
//     return house.hoster.toLowerCase().includes(term.toLowerCase());
//   })
// }
