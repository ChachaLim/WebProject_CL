import {Injectable} from "@angular/core";
import {House} from "./House";
import {HOUSES} from "./mock-houses";
@Injectable()
export class HouseService{
  getHouses():Promise<House[]>{
    return Promise.resolve(HOUSES);
  }

  getHouse(hoster:string):Promise<House>{
    return this.getHouses().then(houses => houses.find(house => house.hoster===hoster));
  }

  getFilterHouse(hoster:string):Promise<House[]>{
    return this.getHouses().then(houses => houses.filter(house => house.hoster===hoster));
  }

  // getFilterHouse(hoster:string):Promise<House[]>{
  //   if(hoster === undefined)
  //     return Promise.resolve(HOUSES);
  //
  //   return this.getHouses().then(  houses => houses.filter(
  //     function(){
  //       console.log(HOUSES);
  //       return HOUSES[0].hoster.toLowerCase().includes(hoster.toLowerCase());
  //     }
  //   ));
  //   }
}
