import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User, Rol, Genre } from '../../shared/user/user';
import { SystemManager } from '../../systemManager';
import { BDService } from '../bd.service';
import { UserLoggedService } from '../userLogged.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Game, Category } from '../../shared/game/game';

@Component({
  selector: 'app-game-manager',
  templateUrl: './game-manager.component.html',
  styleUrls: ['./game-manager.component.css'],
  providers: [BDService, UserLoggedService]
})


export class GameManagerComponent extends SystemManager implements OnInit 
{
  private userLogged: User;
  private games: Array<Game>;
  private activeGame: Game;
  private mapGame: Map<string, Game>;


  constructor(dataBaseService: BDService, private userLoggedServ: UserLoggedService, 
      private router: Router) 
  {
  	super();

    this.userLogged = userLoggedServ.getUserLogged().getUser();
    SystemManager.dataBase = dataBaseService.connect;
    
    //  Anadimos un par de juegos de prueba
    let g: Game;
    g = new Game("Super Mario Bros", "El Juegazo de Nintendo", Category.ACTION);
    SystemManager.dataBase.add(g);
    
    let g2: Game;
    g2 = new Game("Ajedrez", "Un juego de Mesa", Category.BOARD_GAME);
    SystemManager.dataBase.add(g2);
    // -------

    this.mapGame = SystemManager.dataBase.getMapGame();    
    this.games = SystemManager.dataBase.getArrayGames();
  }

	ngOnInit() { }

  selectGame(game: Game) {
    this.activeGame = game;
  }

  deleteGame(event) {
    console.log("Juego borrado.");
    SystemManager.dataBase.remove(this.activeGame);
  }

  viewTournaments(event) {
    console.log("Viendo torneo.");
    this.userLoggedServ.getUserLogged().setGame = this.activeGame;

    this.router.navigate(['/tournamentmanager']);
  }


}
