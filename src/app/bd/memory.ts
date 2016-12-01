import {BD} from './bd';

import { User } from '../shared/user/user';
import { Game } from '../shared/game/game';
import { Match } from '../shared/match/match';
import { Tournament } from '../shared/tournament/tournament';

export class Memory implements BD
{
	private mapUser: Map<string, User>;
	private mapGame: Map<string, Game>;

	constructor() {
		this.mapUser = new Map<string, User>();
		this.mapGame = new Map<string, Game>();
	}

	add(item: User | Game) {

		if (item instanceof User) {
			this.mapUser.set(item.getNick, item);
		}

		if (item instanceof Game) {
			this.mapGame.set('pepe', item);
		}
	}

	remove(item: User | Game) {

		if (item instanceof User) {
			this.mapUser.delete(item.getNick);
		}

		if (item instanceof Game) {
			this.mapUser.delete('pepe');
		}
	}

	getUser(item: User): User {

		return this.mapUser.get(item.getNick);
	}

	getGame(item: Game): Game {

		return this.mapGame.get('pepe');
	}
}
