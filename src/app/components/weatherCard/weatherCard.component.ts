import { Component,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'weather-card',
  templateUrl: './weatherCard.html',
  styles:[``]
})

export class WeatherCard {
  @Input() card: any
  @Output() eventClick = new EventEmitter();

  handleRemove() {
    this.eventClick.emit({
      id:this.card.id,
      name:'remove'
    });
  }

  handleShowMore() {
    this.eventClick.emit({
      id:this.card.id,
      name:'show-more'
    });
  }
} 