import {BD} from './bd';

import { User } from '../shared/user/user';
import { Game } from '../shared/game/game';
import { Match } from '../shared/match/match';
import { Tournament } from '../shared/tournament/tournament';

import { Observable } from 'rxjs';
import { Aggregator } from '../util/iterator/aggregator';
import { IndexIterator } from '../util/iterator/indexIterator';
import { Iterator } from '../util/iterator/iterator';

export class Memory implements BD
{
	private static instance: Memory;
	API = 'http://localhost:4200';
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
		var headers = new Headers();
        headers.append('Content-Type', 'application/json');

		if (item instanceof User) {
			return this.http.post('/api/User',json.stringify(item),{headers:headers})
					.map(res=>res.json());
		}

		if (item instanceof Game) {
			return this.http.post('/api/Game',json.stringify(item),{headers:headers})
					.map(res=>res.json());
		}
	}
	
	remove(item: User | Game) {

		if (item instanceof User) {
			return this.http.delete('/api/user/'+id)
            		.map(res => res.json());
		}

		if (item instanceof Game) {
			return this.http.delete('/api/game/'+id)
            		.map(res => res.json());
		}
	}

	getUser(item: User): User {
		return this.http.get('/api/User',{item})
				.map(res=>res.json());
	}

	getGame(item: Game): Game {
		return this.http.get('/api/Game',{item})
				.map(res=>res.json());
	}

	getUsers(){
		return this.http.get('/api/User')
				.map(res=>res.json());
	}

	getGames(){
		return this.http.get('/api/Game')
				.map(res=>res.json());
	}

	updateUser(item: User){
		var headers = new Headers();
        headers.append('Content-Type', 'application/json');
		return this.http.post('/api/User',json.stringify(item),{headers:headers})
				.map(res=>res.json());
	}

	updateGame(item: Game){
		var headers = new Headers();
        headers.append('Content-Type', 'application/json');
		return this.http.post('/api/Game',json.stringify(item),{headers:headers})
				.map(res=>res.json());
	}
	*/
}
