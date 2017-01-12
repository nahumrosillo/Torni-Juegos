import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User, Rol, Genre } from '../../shared/user/user';
import { SystemManager } from '../../systemManager';
import { BDService } from '../bd.service';
import { UserLoggedService } from '../userLogged.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Game, Category } from '../../shared/game/game';
import { Tournament } from '../../shared/tournament/tournament';
import { IndexIterator } from '../../util/iterator/indexIterator';
import { Iterator } from '../../util/iterator/iterator';

@Component({
  selector: 'app-tournament-manager',
  templateUrl: './tournament-manager.component.html',
  styleUrls: ['./tournament-manager.component.css'],
  providers: [BDService, UserLoggedService]
})


export class TournamentManagerComponent extends SystemManager implements OnInit 
{
  private userLogged: User;
  private gameSelected: Game;
  private tournaments: Array<Tournament>;
  private activeTournament: Tournament;


  constructor(private dataBaseService: BDService, userLoggedServ: UserLoggedService, 
      private router: Router) 
  {
  	super();

    this.userLogged = userLoggedServ.getUserLogged().getUser();
    SystemManager.dataBase = dataBaseService.connect;

    this.gameSelected = userLoggedServ.getUserLogged().getGame();
    this.tournaments = this.gameSelected.getTournaments();
  }

	ngOnInit() { }

  selectTournament(tour: Tournament) {
    this.activeTournament = tour;
  }

  deleteTournament(event) {
    console.log("Torneo borrado.");
    //SystemManager.dataBase.remove(this.activeGame);
  }

  viewMatchs(event) {
    console.log("Viendo partidas...");
    //this.dataBaseService.gameSelected = this.activeGame;
  }


}
