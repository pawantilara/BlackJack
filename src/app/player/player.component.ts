import { Component, OnInit } from '@angular/core';
import { DeckService } from '../services/deck.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor( private deck: DeckService) { }
player: any;
name = 'player Points';
playerPoints = 0;
  ngOnInit() {
    this.player = this.deck.getPlayer();
    console.log(this.player);
    this.deck.getPlayerPoints();
    this.playerPoints = this.deck.playerPoints;

  }
  cards(){
    this.player = this.deck.getCardPlayer();
    this.deck.getPlayerPoints();
    this.playerPoints = this.deck.playerPoints;
  }
}
