import { Component, OnInit } from '@angular/core';
import { DeckService } from '../services/deck.service';

@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.css']
})
export class DealerComponent implements OnInit {

  constructor( private deck: DeckService) { }
  dealer: any;
  dealerPoints = 0;
    ngOnInit() {
      this.dealer = this.deck.getDealer();
      console.log(this.dealer);
      this.deck.getDealerPoints();
      this.dealerPoints = this.deck.dealerPoints;
    }
    cards() {
      this.dealer = this.deck.getCardDealer();
      this.deck.getDealerPoints();
      this.dealerPoints = this.deck.dealerPoints;
    }

}
