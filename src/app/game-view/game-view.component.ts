import { Component, OnInit, Input } from '@angular/core';

import { Game } from '../game';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})
export class GameViewComponent implements OnInit {

  @Input() game: Game = null;

  constructor() { }

  ngOnInit() {
  }

  onIncrement(isTeam2Score?: boolean) {
    if (isTeam2Score) {
      this.game.teamScore2++;
    } else {
      this.game.teamScore1++;
    }
  }
}
