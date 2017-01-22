import { Match } from '../../../shared/match/match';
import { Team } from '../../../shared/team/team';
import { Tournament } from '../../../shared/tournament/tournament';
import { MatchFactory } from '../match-factory/match-factory';

export interface TournamentFactory {

	createTournament(name: string, startIns: Date, endIns: Date, 
			startTour: Date,  endTour: Date, teams: Array<Team>, typeMatch: MatchFactory): Tournament
}