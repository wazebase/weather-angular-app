import { Component, Input, Output,EventEmitter } from '@angular/core';
import { CardDisplay } from 'src/app/containers/cardDisplay.component';

@Component({
  selector: 'weather-cardboard',
  templateUrl: './weatherCardBoard.html',
  styles:[`
  .cardboard {
    display:flex;
    flex-direction: column;
    justify-items:center;
  }
  .cardboard-container {
    display:flex;
  }
  #top {
    width:700px;
  }`]
})

export class WeatherCardBoard {
@Input() card:any
@Output() eventClick = new EventEmitter();

handleShowLess() {
  this.eventClick.emit(false);
}
}