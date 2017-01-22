import { Match } from '../../../shared/match/match';
import { Team } from '../../../shared/team/team';
import { Tournament } from '../../../shared/tournament/tournament';

export interface MatchFactory {

	createMatchs(tournament: Tournament, teams: Array<Team>): Array<Match>;
}