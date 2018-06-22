import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { GameViewComponent } from './game-view/game-view.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameListService } from './game-list.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [
    AppComponent,
    GameViewComponent,
    GameListComponent
  ],
  bootstrap:    [
    AppComponent
  ],
  providers: [
    GameListService
  ]
})
export class AppModule { }
