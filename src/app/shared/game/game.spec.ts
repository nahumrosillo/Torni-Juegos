/**
 * Created by nahum on 26/11/16.
 */

import { TestBed, async } from '@angular/core/testing';
import { Game } from './game';
import { Tournament } from '../tournament/tournament';

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

        let t1 = new Tournament();
        let t2 = new Tournament();

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
