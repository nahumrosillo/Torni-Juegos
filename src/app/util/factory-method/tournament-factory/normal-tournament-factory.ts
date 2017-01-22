import { Tournament } from '../../../shared/tournament/tournament';
import { TournamentFactory } from './tournament-factory';
import { Match } from '../../../shared/match/match';
import { NormalTournament } from '../../../shared/tournament/normaltournament';
import { NormalMatch } from '../../../shared/match/normalmatch';
import { MatchFactory } from '../match-factory/match-factory';
import { Team } from '../../../shared/team/team';

export class NormalTournamentFactory implements TournamentFactory {

	private newTournament: Tournament;

	NormalTournamentFactory() {}

	createTournament(name: string, startIns: Date, endIns: Date, 
			startTour: Date,  endTour: Date, teams: Array<Team>, typeMatch: MatchFactory): Tournament
	{
		this.newTournament = new NormalTournament(name, startIns, endIns, startTour, endTour, teams, typeMatch);

		return this.newTournament;
	}
}