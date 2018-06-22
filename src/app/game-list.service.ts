import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Game } from './game';

@Injectable()
export class GameListService {

  constructor(private http: HttpClient) { }

  getAllGames(): Observable<Game[]> {
    return this.http.get<Game[]>('https://7bb1efd8-68cf-45e0-9caa-3d7b64141382.mock.pstmn.io/events/1/games');
  }
}

