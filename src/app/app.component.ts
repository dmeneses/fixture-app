import { Component } from '@angular/core';
import { Game } from './game';

import { GameListService } from './game-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  name = 'Angular 6';
  selectedGame: Game = null;
  games: Game[] = null;

  constructor(private gameListService: GameListService) {
    this.gameListService.getAllGames().subscribe((games) => {
      this.games = games;
    });
  }

  onGameSelectedParent(game: Game) {
    console.log('gameeeee', game);
    this.selectedGame = game;
  }
}
