import { Match } from '../match/match';
import { NormalMatch } from '../match/normalmatch';
import { Team } from './../team/team';
import { Observer } from './../../util/observer/observer';
import { Iterator } from './../../util/iterator/iterator';
import { IndexIterator } from './../../util/iterator/indexIterator';
import { Aggregator } from './../../util/iterator/aggregator';

export class Ranking implements Observer, Aggregator {

	private scoreTeams: Array<ScoreTeam> = new Array<ScoreTeam>();

	constructor(teams: Array<Team>) {

		for(let i: number = 0 ; i < teams.length ; ++i) {
			this.addTeam(teams[i]);
		}
	}

	private addTeam(team: Team) {
		this.scoreTeams.push(new ScoreTeam(team));
	}

	update(match: Match, markerTeam: boolean) {

		let i = 0;

		let LocalFound: boolean = false;
		let VisitorFound: boolean = false;
		while(i < this.scoreTeams.length && (!LocalFound || !VisitorFound))
		{
			if(this.scoreTeams[i].getTeam === (<NormalMatch>match).getLocalTeam) {
				
				LocalFound = true;
				
				if(!markerTeam && !match.isFinished())
					this.scoreTeams[i].setNumScore = this.scoreTeams[i].getNumScore + 1;

				if(match.isFinished()) {
					if((<NormalMatch>match).getScoreLocal > (<NormalMatch>match).getScoreVisitor)
						this.scoreTeams[i].setNumWinner = this.scoreTeams[i].getNumWinner + 1;
					else
						this.scoreTeams[i].setNumLoser = this.scoreTeams[i].getNumLoser + 1;
				}
			}

			if(this.scoreTeams[i].getTeam === (<NormalMatch>match).getVisitorTeam) {
				
				VisitorFound = true;

				if(markerTeam && !match.isFinished())
					this.scoreTeams[i].setNumScore = this.scoreTeams[i].getNumScore + 1;

				if(match.isFinished()) {
					if((<NormalMatch>match).getScoreLocal < (<NormalMatch>match).getScoreVisitor)
						this.scoreTeams[i].setNumWinner = this.scoreTeams[i].getNumWinner + 1;
					else
						this.scoreTeams[i].setNumLoser = this.scoreTeams[i].getNumLoser + 1;	
				}
			}
			i++;
		}
	}

	iterator(): Iterator {
		return new IndexIterator(this.scoreTeams);
	}
}

export class ScoreTeam {

	private team: Team;
	private numScore: number;
	private numWinner: number;
	private numLoser: number;

	constructor(team: Team) {
		this.team = team;
		this.numScore = 0;
		this.numWinner = 0;
		this.numLoser = 0;
	}

	//Getters
	get getTeam(): Team {
		return this.team;
	}

	get getNumScore(): number {
		return this.numScore;
	}

	get getNumWinner(): number {
		return this.numWinner;
	}

	get getNumLoser(): number {
		return this.numLoser;
	}

	//Setters
	set setNumScore(numScore: number) {
		this.numScore = numScore;
	}

	set setNumWinner(numWinner: number) {
		this.numWinner = numWinner;
	}

	set setNumLoser(numLoser: number) {
		this.numLoser = numLoser;
	}
}