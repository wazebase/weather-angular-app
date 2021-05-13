import { Component } from '@angular/core';
import { CardDisplay } from './containers/cardDisplay.component';
import { CardDataService,Card,CardBoard } from './services/cardData.service';

@Component({
  selector: 'weather-app',
  template: `
  <div class="app-container"> 
  <h2>Welcome to my Angular Weather App!</h2>
  <search [cardsCopy]="cardsCopy" (approvedCity)="createCard($event)"></search>
  <hr>
  <card-display [card]="card" (cardsCopy)="handleCardsCopy($event)"></card-display>
  </div>`,
  styles:[ `
  .app-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-items: center;
  }
  `]
})
export class WeatherAppComponent {
  card:any
  cardBoard = [];
  cardsCopy = [];
  
  constructor(private cardDataService:CardDataService) {
  }

  getData(city) {
    this.cardDataService.getCardData(city)
    .subscribe((data:Card)=>{

      let currentBoard:CardBoard;
      
      for(let i = 0; i< 35;i+=8) {
        currentBoard = {
          icon: `http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`,
          weatherName: data.list[i].weather[0].description,
          weatherDate:data.list[i].dt_txt,
          temp:data.list[i].main.temp,
          minTemp:data.list[i].main.temp_min,
          maxTemp:data.list[i].main.temp_max,
          feelsLike:data.list[i].main.feels_like,
        }
        this.cardBoard.push(currentBoard);
      }

      this.card =
      {
      id: data.city.id,
      cityName: data.city.name,
      icon: `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`,
      weatherName: data.list[0].weather[0].description,
      weatherDate:data.list[0].dt_txt,
      temp:data.list[0].main.temp,
      minTemp:data.list[0].main.temp_min,
      maxTemp:data.list[0].main.temp_max,
      feelsLike:data.list[0].main.feels_like,
      cardBoard: this.cardBoard
    }
    this.cardBoard=[];
  })
  }

  createCard(city) {
    this.getData(city);
  }

  handleCardsCopy(newCardsCopy){
    this.cardsCopy = newCardsCopy;
  }
}
