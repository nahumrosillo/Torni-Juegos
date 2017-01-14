import {BD} from './bd';

import { User } from '../shared/user/user';
import { Game } from '../shared/game/game';
import { Match } from '../shared/match/match';
import { Tournament } from '../shared/tournament/tournament';

import { Aggregator } from '../util/iterator/aggregator';
import { IndexIterator } from '../util/iterator/indexIterator';
import { Iterator } from '../util/iterator/iterator';

import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';


/*
	La clase Memory ya no existe. 
	En lugar de eso existen
	2 Maps, uno para User y otro para Game.
	Eso simula el almacenamiento en Memory.
*/
export class Mongo implements BD
{
	private static instance: Mongo;

	private mapUser: Map<string, User>;
	private mapGame: Map<string, Game>;

	private http: Http;

	private constructor() {}

	static get getInstance() {

    	if (this.instance === null || this.instance === undefined) {

            this.instance = new Mongo();
            this.instance.mapUser = new Map<string, User>();
			this.instance.mapGame = new Map<string, Game>();
        }
            return this.instance;
    }

    /*
    	Es un Singleton y no puede hacerse lo siguiente:
    		constructor(private http: Http)

    	En lugar de eso, es en el contructor de bd.service.ts quien le inyecta la
    	dependencia de http con el siguiente metodo.
    */
    set setHTTP(http_: Http) {
    	this.http = http_;
    }


    //	Anade tanto a Memory como a Mongo
	add(item: User | Game) {

		// Memory
		if (item instanceof User) {
			this.mapUser.set(item.getNick, item);
		}

		if (item instanceof Game) {
			this.mapGame.set(item.getName, item);
		}

		//	Mongo
		/*
		var headers = new Headers();
        headers.append('Content-Type', 'application/json');

		if (item instanceof User) {
			return this.http.post('/api/User',JSON.stringify(item),{headers:headers})
					.map(res=>res.json());
		}

		if (item instanceof Game) {
			return this.http.post('/api/Game',JSON.stringify(item),{headers:headers})
					.map(res=>res.json());
		}
		*/
	}

    //	Anade tanto a Memory como a Mongo
	remove(item: User | Game) {

		//	Memory
		if (item instanceof User) {
			this.mapUser.delete(item.getNick);
		}

		if (item instanceof Game) {
			this.mapGame.delete(item.getName);
		}

		//	Mongo
		/*
		if (item instanceof User) {
			return this.http.delete('/api/User/'+item)
            		.map(res => res.json());
		}

		if (item instanceof Game) {
			return this.http.delete('/api/Game/'+item)
            		.map(res => res.json());
		}
		*/
	}

	//	Memory
	//	Devuelve un user
	getUser(item: User): User {
		return this.mapUser.get(item.getNick);
	}

	//	Mongo
	//	Devuelve un Observable<any>
	//	Mal, debe devolver un User. Hay que tratar eso
	//	para que ese return this.http devuelva un User;
	getUserMongo(item: User) {
		return this.http.get('/api/User'+item)
				.map(res=>res.json());
	}

	//	Memory
	//	Devuelve un game
	getGame(item: Game): Game {
		return this.mapGame.get(item.getName);
	}

	//	Mongo
	//	Devuelve un Observable<any>
	//	Mal, debe devolver un Game. Hay que tratar eso
	//	para que ese return this.http devuelva un Game;
	getGameMongo(item: Game) {
		return this.http.get('/api/Game'+item)
				.map(res=>res.json());
	}


	//	Mas de lo mismo
	//	Este metodo es necesario para se pueda listar
	//	por HTML todos los juegos que existen.
	//	Habra que hacer que mongo devuelva
	//	todos los Game, y crearse un array.
	getArrayGames(): Array<Game> {

		let array: Array<Game>;
		array = new Array<Game>();

		this.mapGame.forEach( (value: Game, key: string) => {
			array.push(value);
		});

		return array;
	}

	updateUser(item: User) {
		var headers = new Headers();
        headers.append('Content-Type', 'application/json');
		return this.http.post('/api/User',JSON.stringify(item),{headers:headers})
				.map(res=>res.json());
	}

	updateGame(item: Game){
		var headers = new Headers();
        headers.append('Content-Type', 'application/json');
		return this.http.post('/api/Game',JSON.stringify(item),{headers:headers})
				.map(res=>res.json());
	}
	
}
