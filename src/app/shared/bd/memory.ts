import {BD} from './bd';
import { User } from '../user/user';
import { Game } from '../game/game';
import { Match } from '../match/match';
import { Tournament } from '../tournament/tournament';



export class Memory implements BD
{
	private mapUser: Map<string, User>;
	private mapGame: Map<string, Game>;
	private mapTournament: Map<string, Tournament>;
	private mapMatch: Map<string, Match>

	constructor() {
		this.mapUser = new Map<string, User>();
	}

	addUser(user: User) {
		this.mapUser.set(user.getNick, user);
	}

	removeUser(user: User) {
		this.mapUser.delete(user.getNick);
	}

	getUser(user: User): User {
		return this.mapUser.get(user.getNick); 
	}

	get length(): number {
		return this.mapUser.size;
	}
}