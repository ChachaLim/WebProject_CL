import {Injectable} from "@angular/core";
import {House} from "./House";
import {HOUSES} from "./mock-houses";
@Injectable()
export class HouseService{
  getHouses():House[]{
    return HOUSES;
  }
}
