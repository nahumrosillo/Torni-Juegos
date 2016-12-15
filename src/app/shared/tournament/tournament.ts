import { Iterator } from './../../util/iterator/iterator';
import { IndexIterator } from './../../util/iterator/indexIterator';
import { Aggregator } from './../../util/iterator/aggregator';
import { BTreeImpl } from './../../util/BTree/BTreeImpl'
import { Match } from './../match/match';
import { Team } from './../team/team';

export class Tournament implements Aggregator {
	
	private startIns: Date;
	private endIns: Date;

	private startTour: Date;
	private endTour: Date;
	//private numTeams: number;
	//private numPlayersByTeam: number;
	private award: string;
	//private Matchs: BTreeImpl<Match> = new BTreeImpl<Match>();
	private Matchs: Array<Match>; //= new Array<Match>();

	private MatchIterator;

	constructor(startIns: Date, endIns: Date, startTour: Date,  endTour: Date) {

		this.startIns = startIns;
		this.endIns = endIns;
		this.startTour = startTour;
		this.endTour = endTour;
		//this.numTeams = matchs.length+1;
		//this.numPlayersByTeam = matchs[0].getLocalTeam.getMaxPlayers;
		this.award = 'null';

		this.Matchs = new Array<Match>();
	}

	//Getters
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
		this.startIns = startIns;
	}

	set setEndInscription(endIns: Date)
	{
		this.endIns = endIns;
	}

	set setStartTournament(startTour: Date)
	{
		this.startTour = startTour;
	}

	set setEndTournament(endTour: Date)
	{
		this.endTour = endTour;
	}

	set setAward(award: string) {
		this.award = award
	}

	set setMatch(match: Match)
	{
		this.Matchs.push(match);
	}



	iterator(): Iterator {
		return new IndexIterator(this.Matchs);
	}
}
