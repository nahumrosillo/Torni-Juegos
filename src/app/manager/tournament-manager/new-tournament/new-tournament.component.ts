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


  private nameTour: string;
  private startIns: string;
  private endIns: string;
  private startTour: string;
  private endTour: string;

  private teams: Array<Team>;
  private maxPlayer: number;

  constructor(private userLoggedServ: UserLoggedService) {
    this.gameSelected = userLoggedServ.getUserLogged().getGame();

    
  }

  ngOnInit() {

  }

  private getDateHTML(cad: string): Date {

      let date: Date;

      let anno: number;
      anno = parseInt(cad[0]+cad[1]+cad[2]+cad[3]+cad[4]);

      let month: number;
      month = parseInt(cad[6]+cad[7]);

      let day: number;
      day = parseInt(cad[9]+cad[10]);

      return new Date(anno, month, day, 0, 0, 0, 0);

  }

  onSubmit() {

    this.teams = new Array<Team>();
    for (let i = 0; i < this.maxPlayer; i++) 
      this.teams.push(new Team(i, this.maxPlayer));

   
   //  Hacer las comprobaciones de las fechas aqui
   let sIns: Date  = this.getDateHTML(this.startIns);
   let eIns: Date  = this.getDateHTML(this.endIns);
   let sTour: Date = this.getDateHTML(this.startTour);
   let eTour: Date = this.getDateHTML(this.endTour);

   if (((sIns < eIns) && ( eIns < sTour) && (sTour < eTour))) {

     console.log("Torneo agregado.");
     this.newTournament = new Tournament(this.nameTour, sIns, eIns, sTour, eTour, this.teams);
     this.userLoggedServ.getUserLogged().getGame().addTournament(this.newTournament);

     console.log(this.userLoggedServ.getUserLogged().getGame().lengthTournament);
   }
   else {
     console.log("Fechas incorrectas");
   }


   console.log(this.newTournament);

/*
   this.newTournament = new Tournament(this.startIns, this.endIns,
     this.startTour, this.endTour2, this.teams);

    */

    
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
