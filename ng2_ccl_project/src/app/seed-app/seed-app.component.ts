import {Component, OnInit} from "angular2/core";
import {ngSelectLocation, EmitterService} from '../ng2-location/browser-location';
@Component({
  selector: 'seed-app',
  providers: [EmitterService],
  directives: [ngSelectLocation],
  template: '<ngLocation></ngLocation>'
})
export class SeedAppComponent implements OnInit{
  public selectedCity:any;
  constructor(private EmitterService: EmitterService) {
    window.localStorage.removeItem("city");
  }
  ngOnInit(){
    this.selectedCity = localStorage.getItem("city");
    EmitterService.get("selectedCity").subscribe(data =>{
      this.selectedCity = data;
      localStorage.setItem('city', data);
    });
  }
}
