import { Team } from './../team/team';
import { Subject } from './../../util/observer/subject';
import { Observer } from './../../util/observer/observer';
import { Tournament } from './../tournament/tournament';
import { Match } from './match';

export class NormalMatch implements Match, Subject {
	private startDate: Date;
	private scoreL: number;
	private scoreV: number;
	private LocalTeam: Team;
	private VisitorTeam: Team;
	private finishedMatch: boolean = false;
	private tournament: Tournament;

	private markerTeam: boolean;

	private observerTournament: Observer;

	constructor(tournament: Tournament, startdate: Date, local?: Team, visitor?: Team) {
		
		this.tournament = tournament;
		this.startDate = startdate;
		this.LocalTeam = local;
		this.VisitorTeam = visitor;

		this.scoreL = 0;
		this.scoreV = 0;

		this.registerObserver(tournament);
	}

	endMatch() {

		this.finishedMatch = true;

		this.notify();
		this.removeObserver(this.observerTournament);
	}

	// Getters
	get getWinner(): Team {
		
		if(this.scoreL > this.scoreV)
			return this.LocalTeam;
		else
			return this.VisitorTeam;
	}

	get getLocalTeam(): Team {
		return this.LocalTeam;
	}
	
	get getVisitorTeam(): Team {
		return this.VisitorTeam;
	}

	get getScoreLocal(): number {
		return this.scoreL;
	}

	get getScoreVisitor(): number {
		return this.scoreV;
	}

	get getStartDate(): Date {
		return this.startDate;
	}

	// Setters
	set setScoreLocal(score: number) {

		if(!this.finishedMatch) {

			this.scoreL = score;
			this.markerTeam = false;
			this.notify();
		}
	}

	set setScoreVisitor(score: number) {
		
		if(!this.finishedMatch) {
			this.scoreV = score;
			this.markerTeam = true;
			this.notify();
		}
	}

	isFinished(): boolean {
		return this.finishedMatch;
	}
	
	registerObserver(observer: Observer) {	
		this.observerTournament = observer;
	}

	removeObserver(observer: Observer) {
		this.observerTournament = null;
	}

	notify() {
		this.observerTournament.update(this, this.markerTeam);
	}
}