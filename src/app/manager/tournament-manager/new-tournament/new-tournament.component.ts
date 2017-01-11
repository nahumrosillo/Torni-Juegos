import { Component, OnInit } from '@angular/core';
import { BDService } from '../../bd.service';
import { UserLoggedService } from '../../userLogged.service';
import { Game, Category } from '../../../shared/game/game';
import { Tournament } from '../../../shared/tournament/tournament';
import { Team } from '../../../shared/team/team';


@Component({
  selector: 'new-tournament',
  templateUrl: './new-tournament.component.html',
  styleUrls: ['./new-tournament.component.css'],
  providers: [UserLoggedService]
})
export class NewTournamentComponent implements OnInit {

  private newTournament: Tournament;
  private gameSelected: Game;

  private startIns: Date;
  private endIns: Date;
  private startTour: Date;
  private endTour: Date;
  private teams: Team[];

  constructor(private userLoggedServ: UserLoggedService) {
    this.gameSelected = userLoggedServ.getUserLogged().getGame;
  }

  ngOnInit() {

  }

  onSubmit() {

    
    //to do
    /*
      Buscar en el game si ya existe el torneo. Si existe no lo anade.
    */

    /*let gameBD = this.db.getGame(this.newGame);

    if (gameBD === null || gameBD === undefined) 
    {
      //this.db.add(this.newGame);
      console.log("Torneo agregado al juego");
    } 
    else 
    {
      console.log("Torneo ya existe en el juego");
    }
    */

  }
}
