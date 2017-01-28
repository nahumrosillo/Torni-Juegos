import { Game } from '../shared/game/game';

export interface BD {

	add(item: Game);
	remove(item: Game);
	getGame(item: Game) : Game;
	getArrayGames(): Array<Game>;
}
