import { Tournament } from '../../../shared/tournament/tournament';
import { MatchFactory } from './match-factory';
import { Match } from '../../../shared/match/match';
import { NormalMatch } from '../../../shared/match/normalmatch';
import { Team } from '../../../shared/team/team';

export class NormalMatchFactory implements MatchFactory {

	private currentDateMatch: Date;
	private difDateMatchs: number;

	private teams: Array<Team>;

	private inicioFecha: number ;

	constructor(private startT: Date, endT: Date, nTeams: number) {

		console.log("Constrcutor");
		console.log(startT);

		this.currentDateMatch = startT;
		this.inicioFecha = startT.getDay();
		this.difDateMatchs = (endT.getTime() - startT.getTime()) / nTeams-1;

		this.teams = new Array<Team>();
	}
 
	createMatchs(tournament: Tournament, teams: Array<Team>): Array<Match> {


		for(let i: number = 0 ; i < teams.length ; ++i) {
			this.teams.push(teams[i]);
		}

		let matchs: Array<Match> = new Array<Match>();

		while(this.teams.length >= 2) {

			let teamLocal: Team = this.teams.shift();
			let teamVisitor: Team = this.teams.shift();

			let fecha: Date;
			fecha = new Date(this.currentDateMatch.getFullYear(),
							this.currentDateMatch.getMonth(),
							this.currentDateMatch.getDate(), 0, 0, 0, 0);


			matchs.push(new NormalMatch(tournament, fecha, teamLocal, teamVisitor));

			//	La siguiente partida sera al dia siguiente
			this.startT.setDate(this.startT.getDate() + 1);
			this.currentDateMatch = this.startT;
			//this.currentDateMatch.setTime(this.currentDateMatch.getTime() + this.difDateMatchs);
		}
		return matchs;
	}
}