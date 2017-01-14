import { Injectable, OnInit } from '@angular/core';
import { Memory } from '../bd/memory';
import { BD } from '../bd/bd';
import { User, Rol, Genre } from '../shared/user/user';
import { Game, Category } from '../shared/game/game';
import { Tournament } from '../shared/tournament/tournament';
import { Team } from '../shared/team/team';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class BDService implements OnInit {

    static isCreate: boolean = false;

    ngOnInit() {
        console.log("Memory: OnInit");
    }

  constructor(private http:Http) {

    if (!BDService.isCreate) 
    {
        BDService.isCreate = true;

        /*
            Hard-Code
            Inicializa la BD con datos por defectos
        */

        console.log("Memory: Constructor");

        let date = new Date();
        date.setFullYear(1992, 6, 2);

        let userSuperAdmin = new User();
        userSuperAdmin.setBirthDate = date;
        userSuperAdmin.setDni = '3207070707H';
        userSuperAdmin.setName = 'Nahum';
        userSuperAdmin.setPassword = 'root';
        userSuperAdmin.setRol = Rol.SUPERADMIN;
        userSuperAdmin.setGenre = Genre.MALE;
        userSuperAdmin.setNick = 'root';

        let admin = new User();
        admin.setBirthDate = date;
        admin.setDni = '32070707H';
        admin.setName = 'Nahum';
        admin.setPassword = 'admin';
        admin.setRol = Rol.ADMINISTRATOR;
        admin.setGenre = Genre.FEMALE;
        admin.setNick = 'admin';

        let sponsor = new User();
        sponsor.setBirthDate = date;
        sponsor.setDni = '32070707H';
        sponsor.setName = 'Nahum';
        sponsor.setPassword = 'sponsor';
        sponsor.setRol = Rol.SPONSOR;
        sponsor.setGenre = Genre.MALE;
        sponsor.setNick = 'sponsor';

        let player = new User();
        player.setBirthDate = date;
        player.setDni = '32070707H';
        player.setName = 'Nahum';
        player.setPassword = 'player';
        player.setRol = Rol.PLAYER;
        player.setGenre = Genre.FEMALE;
        player.setNick = 'player';

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

        Memory.getInstance.add(g);


        
        let g2: Game;
        g2 = new Game("Parchis", "El apasionado y popular juego.", Category.BOARD_GAME);
        Memory.getInstance.add(g2);

        Memory.getInstance.add(userSuperAdmin);
        Memory.getInstance.add(admin);
        Memory.getInstance.add(sponsor);
        Memory.getInstance.add(player);
    }

  }

  get connect(): BD {  	
  	return Memory.getInstance;
  }
//Parte de api rest
	add(item: User | Game) {
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