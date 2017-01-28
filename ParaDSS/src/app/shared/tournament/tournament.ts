import { Iterator } from './../../util/iterator/iterator';
import { IndexIterator } from './../../util/iterator/indexIterator';
import { Aggregator } from './../../util/iterator/aggregator';
import { Observer } from './../../util/observer/observer';
import { Subject } from './../../util/observer/subject';
import { MatchFactory } from './../../util/factory-method/match-factory/match-factory';
import { Match } from './../match/match';
import { Team } from './../team/team';
import { User } from './../user/user';
import { Ranking } from './../ranking/ranking';


export interface Tournament extends Observer, Subject, Aggregator {

	getRanking(): Ranking;

	addPlayer(user: User): boolean;
	removePlayer(user: User): boolean;
	searchPlayer(user: User): boolean;

	registerObserver(observer: Observer);
	removeObserver(observer: Observer);
	notify();
	
	update(...any);

	iterator(): Iterator;
}
