import { Component, Output,EventEmitter, Input } from '@angular/core';
import cities from "cities.json";

@Component({
  selector: 'search',
  template: `
  <input id="search-input"
  (input)="city=getValue($event.target)">
  <button (click)="handleSearch()">Create new card</button>
  `,
  styles: [`
    #search-input {
      width: 300px;
    }
  `]
  
})

export class Search {
  city:string
 
  @Input() cardsCopy:any[]
  @Output() approvedCity = new EventEmitter();

  getValue(target: EventTarget):string {
    return (target as HTMLInputElement).value;
  }

  handleSearch() {
    let newCity:string = this.city.toLowerCase();

    if(this.cityExists(newCity)) {
      alert('city exists already!');
    }

    else if(!this.validCity(newCity)) {
      alert('city not found');
    }

    else {
      this.approvedCity.emit(newCity);
    }
  }
  
  validCity(newCity) {
    let validCity:boolean
    let allCities:any = cities;

    allCities.forEach(checkCity=> {
      if(checkCity.name.toLowerCase()===newCity) {
      validCity=true;   
      }
  })
  return validCity;
}

  cityExists(newCity){
    let cityExistAlready = false;

    this.cardsCopy.forEach(card=>{
      if(card.cityName.toLowerCase() === newCity) {
        cityExistAlready = true;
      }
    });

    return cityExistAlready;
  }
} 