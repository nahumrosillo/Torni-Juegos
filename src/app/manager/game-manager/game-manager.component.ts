import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User, Rol, Genre } from '../../shared/user/user';
import { SystemManager } from '../../systemManager';
import { BDService } from '../bd.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Game, Category } from '../../shared/game/game';

@Component({
  selector: 'app-game-manager',
  templateUrl: './game-manager.component.html',
  styleUrls: ['./game-manager.component.css'],
  providers: [BDService]
})


export class GameManagerComponent extends SystemManager implements OnInit 
{
  private games: Array<Game>;
  private activeGame: Game;
  private mapGame: Map<string, Game>;


  constructor(dataBaseService: BDService, private router: Router) 
  {
  	super();

    SystemManager.dataBase = dataBaseService.connect;
    this.mapGame = SystemManager.dataBase.getMapGame();

    let game: Game;
    game = new Game('Juego 1', 'Mundo', Category.ACTION);

    SystemManager.dataBase.add(game);
    let g: Game;
    g = new Game('Juego 2', 'Los Mejores 2', Category.BOARD_GAME);
    SystemManager.dataBase.add(g);
    
    this.games = SystemManager.dataBase.getArrayGames();
  }

	ngOnInit() { }

  selectGame(game: Game) {
    this.activeGame = game;
    console.log(this.activeGame);
  }


}
