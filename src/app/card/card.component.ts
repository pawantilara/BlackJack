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
  ngOnInit() {
  }

}
