import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DeckService {
  constructor() {}
  numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  faceCard = ["J", "Q", "K"];
  suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
  player = [];
  dealer = [];
  num: string;
  value: string;
  temp = [];
  i = 0;
  itrDealer = 0;
  playerPoints = 0;
  dealerPoints = 0;
  getPlayerPoints() {
    this.playerPoints = 0;
    for (this.i = 0; this.i < this.player.length; this.i++) {
      const totalPoints = this.player[this.i][0];
      const index1: number = this.faceCard.indexOf(totalPoints);
      if (index1 !== -1 ) {
        this.playerPoints += 10;
      } else if (totalPoints === 'A') {
        if (this.playerPoints + 11 < 21) {
          this.playerPoints += 11;
        } else {
          this.playerPoints += 1;
        }
      } else {
        console.log('inside', totalPoints);
        // tslint:disable-next-line:radix
        this.playerPoints += parseInt(totalPoints);
      }
    }
  }
  getDealerPoints() {
    this.dealerPoints  = 0;
    for (this.i = 0; this.i < this.dealer.length; this.i++) {
      const totalPoints = this.dealer[this.i][0];
      const index1: number = this.faceCard.indexOf(totalPoints);
      if (index1 !== -1 ) {
        this.dealerPoints += 10;
      } else if (totalPoints === 'A') {
        if (this.dealerPoints + 11 < 21) {
          this.dealerPoints += 11;
        } else {
          this.dealerPoints += 1;
        }
      } else {
        // tslint:disable-next-line:radix
        this.dealerPoints += parseInt(totalPoints);
      }
    }
  }
  getPlayer() {
    console.log('player');
    this.i = 0;
    while (this.i < 2) {
      this.temp = [];
      this.num = this.numbers[Math.floor(Math.random() * this.numbers.length)];
      this.value = this.suits[Math.floor(Math.random() * this.suits.length)];
      this.temp.push(this.num);
      this.temp.push(this.value);
      const index: number = this.player.indexOf(this.temp);
      if (index === -1) {
        this.player.push(this.temp);
        this.i++;
      }
    }
    return this.player;
  }

  getDealer() {
    // first card
    this.i = 0;
    while (this.i < 2) {
      this.temp = [];
      this.num = this.numbers[Math.floor(Math.random() * this.numbers.length)];
      this.value = this.suits[Math.floor(Math.random() * this.suits.length)];
      this.temp.push(this.num);
      this.temp.push(this.value);
      const index: number = this.player.indexOf(this.temp);
      const index1: number = this.dealer.indexOf(this.temp);
      if (index === -1 && index1 === -1) {
        this.dealer.push(this.temp);
        this.i++;
      }
    }
    return this.dealer;
  }
  getCardPlayer() {
    this.i = 0;
    this.itrDealer++;
    while (this.i < 1) {
      this.temp = [];
      this.num = this.numbers[Math.floor(Math.random() * this.numbers.length)];
      this.value = this.suits[Math.floor(Math.random() * this.suits.length)];
      this.temp.push(this.num);
      this.temp.push(this.value);
      const index: number = this.player.indexOf(this.temp);
      const index1: number = this.dealer.indexOf(this.temp);
      if (index === -1 && index1 === -1) {
        this.player.push(this.temp);
        this.i++;
      }
    }
    return this.player;
  }

  getCardDealer() {
    this.i = 0;
    console.log('itr', this.itrDealer);
    while (this.itrDealer--) {
      this.temp = [];
      this.num = this.numbers[Math.floor(Math.random() * this.numbers.length)];
      this.value = this.suits[Math.floor(Math.random() * this.suits.length)];
      this.temp.push(this.num);
      this.temp.push(this.value);
      const index: number = this.player.indexOf(this.temp);
      const index1: number = this.dealer.indexOf(this.temp);
      if (index === -1 && index1 === -1) {
        this.dealer.push(this.temp);
      }
    }
    this.itrDealer = 0;
    return this.dealer;
  }
  clearAll() {
    this.player = [];
    this.dealer = [];
    this.num = '';
    this.value = '';
    this.temp = [];
    this.itrDealer = 0;
    this.playerPoints = 0;
    this.dealerPoints = 0;
  }
}
