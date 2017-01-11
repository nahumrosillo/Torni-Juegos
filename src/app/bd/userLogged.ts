import { User } from '../shared/user/user';
import { Game } from '../shared/game/game';
import { Tournament } from '../shared/tournament/tournament';
import { Match } from '../shared/match/match';

export class UserLogged
{
   private static instance: UserLogged;
   private user: User;

   private gameSelected: Game;
   private tournamentSelected: Tournament;
   private matchSelected: Match;

   static get getInstance() {

    	if (this.instance === null || this.instance === undefined) 
    	{
            this.instance = new UserLogged();
            this.instance.user = new User();
        }

        return this.instance;
    }

	private constructor() {}

	getUser(): User {
		return this.user;
	}

	setUser(item: User) {
		this.user = item;
	}

	clear() {
		this.user = undefined;
	}

	set setGame(game: Game) {
       this.gameSelected = game;
    }

   get getGame(): Game {
       return this.gameSelected;
   }

}
