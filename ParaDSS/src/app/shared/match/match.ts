import { Team } from './../team/team';
import { Subject } from './../../util/observer/subject';
import { Observer } from './../../util/observer/observer';
import { Tournament } from './../tournament/tournament';

export interface Match extends Subject
{
	endMatch();
	isFinished(): boolean;

	registerObserver(observer: Observer);
	removeObserver(observer: Observer);
	notify();
}