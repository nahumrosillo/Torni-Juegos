import { User } from '../shared/user/user';
import { Game } from '../shared/game/game';

export interface BD {

	add(item: User | Game);
	remove(item: User | Game);
	getUser(item: User): User;
	getGame(item: Game): Game;
	sizeUser(): number;
	sizeGame(): number;
	getMapUser(): Map<string, User>;
	getMapGame(): Map<string, Game>;
	getArrayUsers(): Array<User>;
	getArrayGames(): Array<Game>;
}
