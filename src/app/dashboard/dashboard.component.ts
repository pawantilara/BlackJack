import { Component, OnInit } from '@angular/core';
import { DeckService } from '../services/deck.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  coins = [
    {color: '#172f39', num: '10'},
    {color: '#2d3440', num: '20'},
    {color: '#3b454b', num: '100'},
    {color: '#544f42', num: '500'}
];
  totalAmount = 10;
  start = true;
  constructor(private deck: DeckService) { }
  color = '#172f39';
  num = '10';
  bet = false;
  playerPoints = 0;
  dealerPoints = 0;
  ngOnInit() {
    console.log('deashboard');
  }
  open(coin: any) {
    this.color = coin.color;
    this.num = coin.num;
    console.log(this.coins);
    // tslint:disable-next-line:radix
    this.totalAmount += parseInt(this.num);
  }
  points(){
    this.playerPoints = this.deck.playerPoints;
    this.dealerPoints = this.deck.dealerPoints;
    console.log(this.dealerPoints);
  }
  Deal() {
    this.start = false;
    this.bet = true;
    this.points();
  }


}
