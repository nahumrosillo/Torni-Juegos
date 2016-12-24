/**
 * Created by nahum on 26/11/16.
 */ 

import { TestBed, async } from '@angular/core/testing';
import { Game } from './game';
import { Tournament } from '../tournament/tournament';
import { Team } from '../team/team';

let game: Game;

describe('Game', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                Game
            ],
        });

        game = new Game();

    });

    it('se construye llamando al constructor', async(() => {

        let g: Game = new Game('Nahum');

        expect(game).toBeDefined();
        expect(game.getName).toBeDefined();
        expect(game.getName).toEqual('null');
        expect(game.getDescription).toEqual('Empty description');
        expect(game.iterator).toBeDefined();
        expect(g.getName).toEqual('Nahum');
    }));

    it('iteradores', async(() => {

        let inidate = new Date(2016, 9, 5, 0, 0, 0, 0);
        let findate = new Date(2016, 10, 5, 0, 0, 0, 0);
        let iniTdate = new Date(2016, 11, 5, 0, 0, 0, 0);
        let finTdate = new Date(2016, 12, 5, 0, 0, 0, 0);

        let teams: Array<Team> =  new Array<Team>();

        teams.push(new Team(0, 5));
        teams.push(new Team(1, 5));
        teams.push(new Team(2, 5));
        teams.push(new Team(3, 5));

 
        let t1 = new Tournament(inidate, findate, iniTdate, finTdate, teams); 
        let t2 = new Tournament(inidate, findate, iniTdate, finTdate, teams); 


        let i = game.iterator();
        game.addTournament(t1);
        game.addTournament(t1);
        game.addTournament(t2);
        game.addTournament(t2);

        expect(game.lengthTournament).toEqual(2)

        expect(i.current()).toEqual(t1);
        i.next();
        expect(i.current()).toEqual(t2);
        i.next();
    }));


});
