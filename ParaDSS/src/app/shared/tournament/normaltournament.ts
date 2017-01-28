import { Iterator } from './../../util/iterator/iterator';
import { IndexIterator } from './../../util/iterator/indexIterator';
import { Aggregator } from './../../util/iterator/aggregator';
import { Observer } from './../../util/observer/observer';
import { Tournament } from './tournament';
import { Subject } from './../../util/observer/subject';
import { MatchFactory } from './../../util/factory-method/match-factory/match-factory';
import { Match } from './../match/match';
import { NormalMatch } from './../match/normalmatch';
import { Team } from './../team/team';
import { User } from './../user/user';
import { Ranking } from './../ranking/ranking';

export class NormalTournament implements Tournament {

	private name: string;
	
	private startIns: Date;
	private endIns: Date;
	private startTour: Date;
	private endTour: Date;

	private award: string;

	private Matchs: Array<Match>;

	private finishedTournament: boolean = false;
	private currentMatchs: number; 		//Partidas actual para recorrer
	private noEndMatchs : number;		//Partidas actuales no finalizadas

	private observerRanking: Observer;

	private numMaxUsers: number;
	private numCurrentUsers: number;
	private numTeams: number;

	private matchfactory: MatchFactory;

	private hideMatch: Match;
	private markerTeam: boolean;

	constructor(name: string, startIns: Date, endIns: Date, 
		startTour: Date,  endTour: Date, teams: Array<Team>, typeMatch: MatchFactory) 
	{
		this.name = name;
		this.startIns = startIns;
		this.endIns = endIns;
		this.startTour = startTour;

		this.endTour = endTour;
		this.award = 'null';

		this.currentMatchs = 0;
		this.noEndMatchs = 0;
		this.numTeams = teams.length;

		this.Matchs = new Array<Match>();

		this.numCurrentUsers = 0;
		this.numMaxUsers = teams.length * teams[0].getMaxPlayers;

		this.registerObserver(new Ranking(teams));

		this.matchfactory = typeMatch;

		let matchs = this.matchfactory.createMatchs(this, teams);
		this.updateMatchs(matchs);
	}

	private updateMatchs(matchs: Array<Match>) {

		this.noEndMatchs = matchs.length;

		while(matchs.length !== 0) { 

			this.Matchs.push(matchs.shift());
		}

		if(this.Matchs.length === this.numTeams-1) {
			this.finishedTournament = true;
		}
	}

	//Getters

	get getName(): string {
		return this.name;
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

	get getNumMaxUsers(): number {
		return this.numMaxUsers;
	}

	get getCurrentUsers(): number {
		return this.numCurrentUsers;
	}

	getRanking(): Ranking {
		return <Ranking> this.observerRanking;
	}

	get getFinishedTournament(): boolean {
		return this.finishedTournament && this.Matchs[this.Matchs.length-1].isFinished();
	}

	get getWinnerTournament(): Team  {

		if(this.finishedTournament)
			return (<NormalMatch>this.Matchs[this.Matchs.length-1]).getWinner;
		else
			return null;
	}

	get getNumTeams(): number {
		return this.numTeams;
	}

	get getNumMatch(): number {

		return this.Matchs.length;
	}

	//Setter

	set setAward(award: string) {
		this.award = award;
	}

	addPlayer(user: User): boolean {

		let added: boolean = false;
		if(this.numCurrentUsers < this.numMaxUsers)
		{
			let currentMatch: Iterator = this.iterator();
			while(!added && currentMatch.hasNext()) {

				let currentTeam: Team = currentMatch.current().getLocalTeam;

				for(let j = 0 ; j < 2 ; j++) {

					if(!added && currentTeam.getNumPlayers < currentTeam.getMaxPlayers) {					
						currentTeam.addPlayerIntoTeam(user);
						added = true;
						this.numCurrentUsers++;
					}
					currentTeam = currentMatch.current().getVisitorTeam;
				}
				currentMatch.next();
			}
		}
		return added;
	}

	removePlayer(user: User): boolean {

		let removed: boolean = false;

		if(this.numCurrentUsers !== 0)
		{
			let currentMatch: Iterator = this.iterator();		

			while(!removed && currentMatch.hasNext()) {

				let currentTeam: Team = currentMatch.current().getLocalTeam;

				for(let j = 0 ; j < 2 ; j++) {
									
					if(!removed && currentTeam.searchPlayerIntoTeam(user)) {					
							
						currentTeam.removePlayerIntoTeam(user);
						removed = true;
						this.numCurrentUsers--;
					}
					currentTeam = currentMatch.current().getVisitorTeam;
				}
				currentMatch.next();
			}
		}
		return removed;
	}

	searchPlayer(user: User): boolean {
		
		let found: boolean = false;
		
		let currentMatch: Iterator = this.iterator();
		while(!found && currentMatch.hasNext()) {

			let currentTeam: Team = currentMatch.current().getLocalTeam;

			for(let j = 0 ; j < 2 ; j++) {
								
				if(!found && currentTeam.searchPlayerIntoTeam(user)) {					
					found = true;
				}
				currentTeam = currentMatch.current().getVisitorTeam;
			}
			currentMatch.next();
		}
		return found;
	} 

	// Iterator Pattern
	iterator(): Iterator {
		return new IndexIterator(this.Matchs);
	}

	// Observer Pattern : Object
	update(match: Match, markerTeam: boolean) {

		if(match.isFinished()) {
			this.noEndMatchs--;
		}

		this.hideMatch = match;
		this.markerTeam = markerTeam;
		this.notify();

		if(this.noEndMatchs === 0)
		{
			let teams: Array<Team> = new Array<Team>();
			
			while(this.Matchs[this.currentMatchs] !== undefined) {

				teams.push((<NormalMatch>this.Matchs[this.currentMatchs++]).getWinner);
			}

			let matchs = this.matchfactory.createMatchs(this, teams);
			this.updateMatchs(matchs);
		}
	}


	// Observer Pattern : Subject
	registerObserver(observer: Observer) {
		
		this.observerRanking = observer;
	}

	removeObserver(observer: Observer) {
		this.observerRanking = null;
	}

	notify() {
		this.observerRanking.update(this.hideMatch, this.markerTeam);
	}
}