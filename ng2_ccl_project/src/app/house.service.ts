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
}
