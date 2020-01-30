import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoinComponent } from './coin/coin.component';
import { PlayerComponent } from './player/player.component';
import { DealerComponent } from './dealer/dealer.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DashboardComponent,
    CoinComponent,
    PlayerComponent,
    DealerComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
