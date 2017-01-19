import { Team } from './../team/team';
import { Subject } from './../../util/observer/subject';
import { Observer } from './../../util/observer/observer';
import { Tournament } from './../tournament/tournament';

export interface Match
{
	setScoreLocal(score: number);
	setScoreVisitor(score: number);

	getWinner(): Team;
	getLocalTeam(): Team;
	getVisitorTeam(): Team;
	getScoreLocal(): number;
	getScoreVisitor(): number;
	getStartDate(): Date;

	endMatch();
	isFinished(): boolean;
}