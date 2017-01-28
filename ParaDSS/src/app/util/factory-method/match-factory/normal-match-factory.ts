import { Tournament } from '../../../shared/tournament/tournament';
import { MatchFactory } from './match-factory';
import { Match } from '../../../shared/match/match';
import { NormalMatch } from '../../../shared/match/normalmatch';
import { Team } from '../../../shared/team/team';

export class NormalMatchFactory implements MatchFactory {

	private currentDateMatch: Date;
	private difDateMatchs: number;
	private teams: Array<Team>;

	constructor(startT: Date, endT: Date, nTeams: number) {

		this.currentDateMatch = startT;
		this.difDateMatchs = (endT.getTime() - startT.getTime()) / (nTeams-2);

		this.teams = new Array<Team>();
	}
 
	createMatchs(tournament: Tournament, teams: Array<Team>): Array<Match> {


		for(let i: number = 0 ; i < teams.length ; ++i)
			this.teams.push(teams[i]);

		let matchs: Array<Match> = new Array<Match>();

		while(this.teams.length >= 2) {

			let teamLocal: Team = this.teams.shift();
			let teamVisitor: Team = this.teams.shift();
			let fecha: Date = new Date(this.currentDateMatch);

			matchs.push(new NormalMatch(tournament, fecha, teamLocal, teamVisitor));

			this.currentDateMatch.setTime(this.currentDateMatch.getTime() + this.difDateMatchs);
		}
		return matchs;
	}
}