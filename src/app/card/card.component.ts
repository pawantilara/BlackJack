import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
 suits = [{
    name: 'Clubs',
    color: 'black',
    glyph: '&#x2663'
    }, {
    name: 'Spades',
    color: 'black',
    glyph: '&#x2660'
  }, {
    name: 'Hearts',
    color: 'red',
    glyph: '&#x2665'
  }, {
    name: 'Diamonds',
    color: 'red',
    glyph: '&#x2666'
  }];
  constructor() { }
  @Input() deck = 'Diamonds';
  @Input() value = 'A';
  color = '';
  glyph = '';
  i = 0;
  ngOnInit() {
    for ( this.i = 0; this.i < 4; this.i++) {
      if (this.suits[this.i].name === this.deck)
         {
         this.color = this.suits[this.i].color;
         this.glyph = this.suits[this.i].glyph;
        }
    }
  }
}
