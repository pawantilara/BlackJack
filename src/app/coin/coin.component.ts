import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent implements OnInit {
  @Input() color = 'red';
  @Input() num = '10';
  @Input() flag = false;
  constructor() {
  }

  ngOnInit() {
  }

}
