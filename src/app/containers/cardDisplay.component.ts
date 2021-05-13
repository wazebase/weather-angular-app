import { Component,Input, EventEmitter,
  Output,OnChanges,SimpleChanges} from '@angular/core';
import {WeatherCard} from '../components/weatherCard/weatherCard.component';


@Component({
  selector: 'card-display',
  template: `
  <h3 *ngIf="!cards.length">Nothing to show yet. Type in city name and click create button.</h3>
  <div class='card-display'>
  <div *ngFor="let card of cards" [ngStyle]="isShowingCards()" class="weather-card">
  <weather-card (eventClick)="handleClick($event)" [card]="card"></weather-card>
  </div>
  <div class = "weather-card" [ngStyle]="isShowingCardBoard()">
  <weather-cardboard (eventClick)="handleShowLess($event)" [card]="currentCard"></weather-cardboard>
  </div>
  </div>
  `,
  styles:[`
  .card-display: {width: 800px !important;}
  h3{text-align:center}`]
})

export class CardDisplay implements OnChanges {
  @Input() card:Object
  @Output() cardsCopy = new EventEmitter();

  cards = [];
  showCards = true;
  currentCard = {};

    ngOnChanges(changes: SimpleChanges) {
      for (const propName in changes) {
        let change = changes[propName];
        let curVal  = change.currentValue;
        if(propName==='card' && curVal) {
         this.pushToArray(curVal);
        }
      }
    }

    pushToArray(newCard) {
      this.cards.push(newCard);
      this.updateCardCopy();
     }

    handleClick(event) {
      if(event.name === 'remove') {
        this.handleRemoveClicked(event.id);
      }
      else if(event.name ==='show-more') {
        console.log(event);
        this.handleShowMore(event.id);
      }
    }

    handleRemoveClicked(id) {
       this.cards = this.cards.filter(card=>card.id!==id);
       this.updateCardCopy();
    }

    handleShowMore(id) {
      this.showCards = false;
      [this.currentCard] = this.cards.filter(card=>card.id===id)
      console.log(this.currentCard,id);
    }

    handleShowLess(event) {
      this.showCards = true;
    }
    updateCardCopy() {
      this.cardsCopy.emit(this.cards);
    }

    isShowingCards() {
      if(this.showCards){
        return {opacity:1}
      }
      else {
  
        return {opacity:0,
        }
      }
    }
    isShowingCardBoard() {
      if(!this.showCards){
        return {opacity:1}
      }
      else {
        return {opacity:0,
      }
      }
    }

  }

