import { Injectable, OnInit } from '@angular/core';
import { Memory } from '../bd/memory';
import { BD } from '../bd/bd';
import { User, Rol, Genre } from '../shared/user/user';
import { Game, Category } from '../shared/game/game';
import { Tournament } from '../shared/tournament/tournament';
import { Team } from '../shared/team/team';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';

import { Mongo } from '../bd/mongo';

import 'rxjs/add/operator/map'
import 'rxjs/Rx';


@Injectable()
export class BDService implements OnInit {

    mongodb: Mongo;
    http:Http;
    static isCreate: boolean = false;

    ngOnInit() {
    }

  get connect(): BD {  	
  	return Mongo.getInstance;
  }

  constructor(http:Http) {

    this.http=http;
    if (!BDService.isCreate) 
    {
        Mongo.getInstance.setHTTP = http;
        BDService.isCreate = true;

        console.log("Memory: Constructor");

        let g: Game;
        g = new Game("FIFA 17", "El fútbol ha cambiado. FIFA 17 redefine la forma de jugar, competir y vivir el fútbol.", Category.SPORT);

        let teams = new Array<Team>();
        for (let i = 0; i < 4; i++) 
             teams.push(new Team(i, 2));

        g.addTournament(new Tournament("FIFA World Cup 2017", 
            new Date(2016, 8, 5, 0, 0, 0, 0),
            new Date(2016, 8, 6, 0, 0, 0, 0),
            new Date(2016, 8, 7, 0, 0, 0, 0),
            new Date(2016, 8, 8, 0, 0, 0, 0),
            teams));

        
        let g2: Game;
        g2 = new Game("Parchis", "El apasionado y popular juego.", Category.BOARD_GAME);
        
        Mongo.getInstance.add(g);
        Mongo.getInstance.add(g2);
    }

  }


//    -- Parte de api rest --

	add(item: User | Game):Promise<any> {
		var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        console.log("ADD: User o Game");
		if (item instanceof User) {
            console.log("ADD: User");
			var newUser=this.http.post('/api/User',JSON.stringify(item),{headers:headers})
					.map(res=>res.json()).toPromise();
            console.log("ADD: User" + JSON.stringify(newUser));
            return newUser;
		}

		if (item instanceof Game) {
			return this.http.post('/api/Game',JSON.stringify(item),{headers:headers})
					.map(res=>res.json()).toPromise();
		}
	}
	
	remove(item: User | Game) {

		if (item instanceof User) {
			return this.http.delete('/api/User/'+item)
            		.map(res => res.json());
		}

		if (item instanceof Game) {
			return this.http.delete('/api/Game/'+item)
            		.map(res => res.json());
		}
	
    }
	getUser(item: User){
        console.log("get user" + JSON.stringify(item));
		return this.http.get('/api/User'+item)
				.map(res=>res.json());
	}

	getGame(item: Game){
		return this.http.get('/api/Game'+item)
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