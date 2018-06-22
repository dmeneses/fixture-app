import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Game } from '../game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  @Input() gameList: Game[] = null;
  @Output() selectedGame = new EventEmitter<Game>();
  constructor() { }

  ngOnInit() {
  }

  onGameSelected(game: Game) {
    this.selectedGame.emit(game);
  }

}
