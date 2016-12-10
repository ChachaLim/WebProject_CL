import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(houses: any, term: any, opt: any): any {
    //check if search term is undefined
    if(opt==="hoster"){
      if(term === undefined) return houses;
      //return updated hosese array
      console.log("Pipe_hoster");
      console.log(houses);
      return houses.filter(function(house){
        return house.hoster.toLowerCase().includes(term.toLowerCase());
      })
    }
    else if(opt==="place"){
      if(term === undefined) return houses;
      //return updated hosese array
      console.log("Pipe_place");
      console.log(houses);
      return houses.filter(function(house){
        return house.place.toLowerCase().includes(term.toLowerCase());
      })
    }

  }

}
