import { Iterator } from './../../util/iterator/iterator';
import { IndexIterator} from './../../util/iterator/indexIterator';
import { Aggregator } from './../../util/iterator/aggregator';
import { Match } from './../match/match';
import { Team } from './../team/team';

export class Tournament implements Aggregator {
	
	private startIns: Date;
	private endIns: Date;

	private startTour: Date;
	private endTour: Date;

	private numTeams: number;
	private numPlayersByTeam: number;
	private award: string;

	private Matchs: Array<Match> = new Array<Match>();

	constructor(startIns: Date, endIns: Date, 
				startTour: Date,  endTour: Date, 
				numTeams: number, numPLayersByTeam: number)
	{
		this.startIns = startIns;
		this.endIns = endIns;
		this.startTour = startTour;
		this.endTour = endTour;
		this.numTeams = numTeams;
		this.numPlayersByTeam = numPLayersByTeam;
		this.award = 'null';

		let Teams: Array<Team> = new Array<Team>();
		for(let i: number = 0 ; i < numTeams ; ++i)
		{
			Teams[i] = new Team(i, numPLayersByTeam);
		}

		
	}

	set setAward(award: string)
	{
		this.award = award
	}

	iterator(): Iterator {
		return new IndexIterator(this.Matchs);
	}
}
