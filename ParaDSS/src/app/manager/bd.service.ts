import { Injectable, OnInit } from '@angular/core';
import { Memory } from '../bd/memory';
import { BD } from '../bd/bd';
import { User, Rol, Genre } from '../shared/user/user';
import { Game, Category } from '../shared/game/game';
import { Tournament } from '../shared/tournament/tournament';
import { Team } from '../shared/team/team';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { NormalTournamentFactory } from '../util/factory-method/tournament-factory/normal-tournament-factory';
import { TournamentFactory } from '../util/factory-method/tournament-factory/tournament-factory';
import { MatchFactory } from '../util/factory-method/match-factory/match-factory';
import { NormalMatchFactory } from '../util/factory-method/match-factory/normal-match-factory';


import 'rxjs/add/operator/map'
import 'rxjs/Rx';


/*    
    Esta clase solamente es usada para almacenar 
    Games, Tournaments y Matchs
*/


@Injectable()
export class BDService implements OnInit {

    memoryDB: Memory;
    http:Http;
    static isCreate: boolean = false;

    ngOnInit() {
    }

  get connect(): BD {  	
  	return Memory.getInstance;
  }

  constructor(http:Http) {

    this.http=http;
    if (!BDService.isCreate) 
    {
        Memory.getInstance.setHTTP = http;
        BDService.isCreate = true;

        //    Borrar desde aqui, hasta el final para
        //    dejar limpio de juegos y torneos la BD, al iniciarse

        console.log("Iniciado BDService");    

        let g1: Game;
        g1 = new Game("FIFA 17", "El fútbol ha cambiado. FIFA 17 redefine la forma de jugar, competir y vivir el fútbol.", Category.SPORT);

        let teams = new Array<Team>();
        for (let i = 0; i < 4; i++) 
             teams.push(new Team(i, 2));


        let t: Tournament;
        let mF: MatchFactory = new NormalMatchFactory(new Date(2016, 8, 7, 0, 0, 0, 0), 
        											  new Date(2016, 8, 8, 0, 0, 0, 0), 
        											  teams.length);;

        t = new NormalTournamentFactory().createTournament("FIFA World Cup 2017", 
            new Date(2016, 8, 5, 0, 0, 0, 0),
            new Date(2016, 8, 6, 0, 0, 0, 0),
            new Date(2016, 8, 7, 0, 0, 0, 0),
            new Date(2016, 8, 8, 0, 0, 0, 0),
            teams, mF);

        g1.addTournament(t);

        
        let g2: Game;
        g2 = new Game("Parchis", "El apasionado y popular juego.", Category.BOARD_GAME);
        
        Memory.getInstance.add(g1);
        Memory.getInstance.add(g2);
    }

  }
}