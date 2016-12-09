import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(houses: any, term: any): any {
    //check if search term is undefined
    if(term === undefined) return houses;
    //return updated hosese array
    return houses.filter(function(house){
      return house.hoster.toLowerCase().includes(term.toLowerCase());
    })
  }

}
