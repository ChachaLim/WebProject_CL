import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GoogleMapService {

  constructor(private http: Http) { }

  convertAddressToCooredinate(address: string){
    if(address != null){
      return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+encodeURIComponent(address))
        .map(response => response.json());
    }
  }
}
