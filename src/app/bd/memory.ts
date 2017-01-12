import {BD} from './bd';

import { User } from '../shared/user/user';
import { Game } from '../shared/game/game';
import { Match } from '../shared/match/match';
import { Tournament } from '../shared/tournament/tournament';

import { Aggregator } from '../util/iterator/aggregator';
import { IndexIterator } from '../util/iterator/indexIterator';
import { Iterator } from '../util/iterator/iterator';

export class Memory implements BD
{
	private static instance: Memory;

	private mapUser: Map<string, User>;
	private mapGame: Map<string, Game>;

	static get getInstance() {

    	if (this.instance === null || this.instance === undefined) {

            this.instance = new Memory();
            this.instance.mapUser = new Map<string, User>();
			this.instance.mapGame = new Map<string, Game>();
        }
            return this.instance;
    }

	private constructor() {}

	add(item: User | Game) {

		if (item instanceof User) {
			this.mapUser.set(item.getNick, item);
		}

		if (item instanceof Game) {
			this.mapGame.set(item.getName, item);
		}
	}

	remove(item: User | Game) {

		if (item instanceof User) {
			this.mapUser.delete(item.getNick);
		}

		if (item instanceof Game) {
			this.mapGame.delete(item.getName);
		}
	}

	getUser(item: User): User {

		return this.mapUser.get(item.getNick);
	}

	getGame(item: Game): Game {

		return this.mapGame.get(item.getName);
	}

	sizeUser(): number {
		return this.mapUser.size;
	}

	sizeGame(): number {
		return this.mapGame.size;
	}

	getMapUser(): Map<string, User> {
		return this.mapUser;
	}

	getMapGame(): Map<string, Game> {
		return this.mapGame;
	}

	getArrayUsers(): Array<User> {
		let array: Array<User>;
		array = new Array<User>();

		this.mapUser.forEach( (value: User, key: string) => {
			array.push(value);
		});

		return array;
	}

	getArrayGames(): Array<Game> {

		let array: Array<Game>;
		array = new Array<Game>();

		this.mapGame.forEach( (value: Game, key: string) => {
			array.push(value);
		});

		return array;
	}
	/*
	private constructor(http:Http) {}

	add(item: User | Game) {

		if (item instanceof User) {
			this.http.post(/api/User+item);
		}

		if (item instanceof Game) {
			this.http.post(/api/Game+item);
		}
	}
	
	remove(item: User | Game) {

		if (item instanceof User) {
			this.http.delete(/api/User+item);
		}

		if (item instanceof Game) {
			this.http.delete(/api/Game+item);
		}
	}

	getUser(item: User): User {

		return this.mapUser.get(item.getNick);
	}

	getGame(item: Game): Game {

		return this.mapGame.get(item.getName);
	}

	sizeUser(): number {
		return this.mapUser.size;
	}

	sizeGame(): number {
		return this.mapGame.size;
	}

	getMapUser(): Map<string, User> {
		return this.mapUser;
	}

	getMapGame(): Map<string, Game> {
		return this.mapGame;
	}

	getArrayUsers(): Array<User> {
		let array: Array<User>;
		array = new Array<User>();

		this.mapUser.forEach( (value: User, key: string) => {
			array.push(value);
		});

		return array;
	}

	getArrayGames(): Array<Game> {

		let array: Array<Game>;
		array = new Array<Game>();

		this.mapGame.forEach( (value: Game, key: string) => {
			array.push(value);
		});

		return array;
	}
	*/
}
