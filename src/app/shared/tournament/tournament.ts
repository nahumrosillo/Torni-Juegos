import { Iterator } from './../../util/iterator/iterator';
import { IndexIterator } from './../../util/iterator/indexIterator';
import { Aggregator } from './../../util/iterator/aggregator';
import { Observer } from './../../util/observer/observer';
import { BTreeImpl } from './../../util/BTree/BTreeImpl'
import { Match } from './../match/match';
import { Team } from './../team/team';
import { Ranking } from './../ranking/ranking';

export class Tournament implements Aggregator, Observer {
	
	private finishedTournament: boolean = false;

	private currentMatchs: number; 		//Partidas actualmente activos
	private noEndMatchs : number;		//Partidas actuales no finalizadas

	private currentDateMatch: Date;
	private difDateMatchs: number;

	private startIns: Date;
	private endIns: Date;

	private startTour: Date;
	private endTour: Date;

	private award: string;
	private Matchs: Array<Match>;

	private ranking: Ranking;

	private MatchIterator;

	constructor(startIns: Date, endIns: Date, startTour: Date,  endTour: Date, teams: Array<Team>) {

		this.startIns = startIns;
		this.endIns = endIns;
		this.startTour = startTour;
		this.currentDateMatch = startTour;
		this.endTour = endTour;
		this.award = 'null';

		this.Matchs = new Array<Match>();
		this.currentMatchs = 0;
		this.noEndMatchs = 0;


		this.difDateMatchs = (endTour.getTime() - startTour.getTime()) / teams.length-1;

		this.createMatchs(teams);
	}

	private createMatchs(teams: Array<Team>) {

		let i: number = 0;
		this.currentMatchs = 0;

		while(i < teams.length-1) {

			let newMatch: Match = new Match(this, this.currentDateMatch, teams[i++], i < teams.length ? teams[i++] : null);

			this.currentMatchs++;
			this.noEndMatchs++;

			this.Matchs.push(newMatch);

			this.currentDateMatch.setTime(this.currentDateMatch.getTime() + this.difDateMatchs);
		}
	}

	//Getters

	get getFinishedTournament(): boolean {
		return this.finishedTournament;
	}

	get getWinnerTournament(): Team  {

		if(this.finishedTournament)
			return this.Matchs[this.Matchs.length-1].getWinner;
		else
			return null;
	}

	get getStartInscription(): Date {
		return this.startIns;
	}

	get getEndInscription(): Date {

		return this.endIns;
	}

	get getStartTournament(): Date {

		return this.startTour;
	}

	get getEndTournament(): Date {

		return this.endTour;
	}

	get getAward(): string {

		return this.award;
	}

	get getNumMatch(): number {

		return this.Matchs.length;
	}

	//Setters

	set setStartInscription(startIns: Date)
	{
		if(!this.finishedTournament)
			this.startIns = startIns;
	}

	set setEndInscription(endIns: Date)
	{
		if(!this.finishedTournament)
			this.endIns = endIns;
	}

	set setAward(award: string) {
		
		if(!this.finishedTournament)
			this.award = award
	}


	iterator(): Iterator {
		return new IndexIterator(this.Matchs);
	}

	update(teamwinner: Team)
	{
		this.noEndMatchs--;

		if(this.noEndMatchs === 0)
		{
			let teams: Array<Team> = new Array<Team>();
			
			let currentMatch = 0;
			let iterador = this.Matchs.length-1;

			while(currentMatch < this.currentMatchs) {

				teams.push(this.Matchs[iterador].getWinner);

				currentMatch++;
				iterador--;
			}

			if(teams.length === 1)
			{
				this.finishedTournament = true;
			}
			else
			{
				this.createMatchs(teams);
			}
		}
	}
}
