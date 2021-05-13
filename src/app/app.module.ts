import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Search } from './components/search/search.component';
import { CardDisplay } from './containers/cardDisplay.component';
import {WeatherCard} from './components/weatherCard/weatherCard.component';
import {WeatherAppComponent } from './weatherApp.component';
import { CardDataService } from './services/cardData.service';
import { HttpClientModule } from '@angular/common/http';
import { WeatherCardBoard } from './components/weatherCardBoard/weatherCardBoard.component';

@NgModule({
  declarations: [
   WeatherAppComponent,
   CardDisplay,
   Search,
   WeatherCard,
   WeatherCardBoard
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CardDataService],
  bootstrap: [WeatherAppComponent]
})
export class AppModule { }
