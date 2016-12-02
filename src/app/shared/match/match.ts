import { Team } from './../team/team';

export class Match {
	private startDate: Date;
	private scoreL: number;
	private scoreV: number;
	private LocalTeam: Team;
	private VisitorTeam: Team;
	private finishedMatch: boolean = false;

	constructor(startdate: Date, local: Team, visitor: Team) //OK
	{
		this.startDate = startdate;
		this.LocalTeam = local;
		this.VisitorTeam = visitor;

		this.scoreL = 0;
		this.scoreV = 0;
	}

	endMatch() { //OK

		this.finishedMatch = true;
	}

	// Getters
	get getWinner(): Team { //OK
		
		if(this.scoreL > this.scoreV)
			return this.LocalTeam;
		else
			return this.VisitorTeam;
	}

	get getLocalTeam(): Team {		//OK
		
		return this.LocalTeam;
	}

	get getVisitorTeam(): Team {	//OK
		
		return this.VisitorTeam;
	}

	get getScoreLocal(): number {	//OK

		return this.scoreL;
	}

	get getScoreVisitor(): number {	//OK

		return this.scoreV;
	}

	get getStartDate(): Date {		//OK

		return this.startDate;
	}


	// Setters
	set setScoreLocal(score: number) {  //OK

		if(!this.finishedMatch)
			this.scoreL = score;
	}

	set setScoreVisitor(score: number) { //OK
		
		if(!this.finishedMatch)
			this.scoreV = score;
	}
	

	




}