import { Component, OnInit } from '@angular/core';
import { BDService } from '../../bd.service';
import { UserLoggedService } from '../../userLogged.service';
import { Game, Category } from '../../../shared/game/game';
import { Tournament } from '../../../shared/tournament/tournament';
import { NormalTournamentFactory } from '../../../util/factory-method/tournament-factory/normal-tournament-factory';
import { NormalMatchFactory } from '../../../util/factory-method/match-factory/normal-match-factory';
import { MatchFactory } from '../../../util/factory-method/match-factory/match-factory';
import { Team } from '../../../shared/team/team';


@Component({
  selector: 'new-tournament',
  templateUrl: './new-tournament.component.html',
  styleUrls: ['./new-tournament.component.css'],
  providers: [UserLoggedService]
})
export class NewTournamentComponent implements OnInit {

  private maxLimitTournaments: number = 100;

  private newTournament: Tournament;
  private gameSelected: Game;


  private nameTour: string;
  private startIns: string;
  private endIns: string;
  private startTour: string;
  private endTour: string;

  private teams: Array<Team>;
  private maxPlayer: number;
  private maxTeams: number;

  constructor(private userLoggedServ: UserLoggedService) {
    this.gameSelected = userLoggedServ.getUserLogged().getGame(); 
  }

  ngOnInit() {

  }

  private getDateHTML(cad: string): Date {

      let date: Date;
      console.log(cad);
      let anno: number;
      anno = parseInt(cad[0]+cad[1]+cad[2]+cad[3]+cad[4]);

      let month: number;
      month = parseInt(cad[5]+cad[6]);

      let day: number;
      day = parseInt(cad[8]+cad[9]);

      return new Date(anno, month, day, 0, 0, 0, 0);
  }

  onSubmit() {

    if (this.userLoggedServ.getUserLogged().getGame().lengthTournament === this.maxLimitTournaments)
    {
       console.log("Limite de torneos alcanzados");
       window.alert("Limite de Torneos Alcanzados");
    }
    else
    {
        this.teams = new Array<Team>();
        for (let i = 0; i < this.maxTeams; i++) 
          this.teams.push(new Team(i, this.maxPlayer));

       
       let sIns: Date  = this.getDateHTML(this.startIns);
       let eIns: Date  = this.getDateHTML(this.endIns);
       let sTour: Date = this.getDateHTML(this.startTour);
       let eTour: Date = this.getDateHTML(this.endTour);


       if (( (sIns < eIns) && (eIns < sTour) && (sTour < eTour) )) 
       {
         console.log("Torneo agregado.");
         window.alert("Torneo Agregado");
         //this.newTournament = new NormalTournamentFactory(this.nameTour, sIns, eIns, sTour, eTour, this.teams, new NormalMatchFactory());
         
         let typeMatch: MatchFactory = new NormalMatchFactory(sTour, eTour, this.teams.length);

         this.newTournament = new NormalTournamentFactory()
           .createTournament(this.nameTour, sIns, eIns, sTour, eTour, this.teams, typeMatch);

         this.userLoggedServ.getUserLogged().getGame().addTournament(this.newTournament);
       }
       else
         console.log("Fechas incorrectas");
    }
  }
}
