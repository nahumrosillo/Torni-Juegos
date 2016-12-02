import { TestBed, async } from '@angular/core/testing';
import { Match } from './match';
import { Team } from './../team/team';
//import { User } from './../user/user'; 

describe('Match', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                Match
            ],
        });
    });

    it('se construye llamando al constructor', async(() => {

        let date = new Date();
        date.setFullYear(2016, 12, 5);
        let teamlocal = new Team(0, 5);
        let teamvisitor = new Team(1, 5);

        let match = new Match(date, teamlocal, teamvisitor);

        expect(match).toBeDefined;   
    }));

    it('se construye un partido con puntuación 0-0', async(() => {

        let date = new Date();
        date.setFullYear(2016, 12, 5);
        let teamlocal = new Team(0, 5);
        let teamvisitor = new Team(1, 5);

        let match = new Match(date, teamlocal, teamvisitor);

        expect(match.getScoreLocal).toEqual(0);
        expect(match.getScoreLocal).toEqual(0);
    }));

    it('Están bien definido sus equipos y la fecha', async(() => {

        let date = new Date();
        date.setFullYear(2016, 12, 5);
        let teamlocal = new Team(0, 5);
        let teamvisitor = new Team(1, 5);

        let match = new Match(date, teamlocal, teamvisitor);

        expect(match.getLocalTeam).toEqual(teamlocal);
        expect(match.getVisitorTeam).toEqual(teamvisitor);
        expect(match.getStartDate).toEqual(date);
    }));

    it('Se asigna correctamente la puntuación de cada equipo y el ganador', async(() => {

        let scoreLocal = 30;
        let scoreVisitor = 29;

        let date = new Date();
        date.setFullYear(2016, 12, 5);
        let teamlocal = new Team(0, 5);
        let teamvisitor = new Team(1, 5);

        let match = new Match(date, teamlocal, teamvisitor);

        match.setScoreLocal = scoreLocal;
        match.setScoreVisitor = scoreVisitor;

        expect(match.getScoreLocal).toEqual(scoreLocal);
        expect(match.getScoreVisitor).toEqual(scoreVisitor);
        expect(match.getWinner).toEqual(teamlocal);
    }));

    it('No se puede modificar la puntuación una vez finalizado el partido', async(() => {

        let scoreLocal = 30;
        let scoreLocalFalse = 10;
        let scoreVisitor = 29;
        let scoreVisitorFalse = 11;

        let date = new Date();
        date.setFullYear(2016, 12, 5);
        let teamlocal = new Team(0, 5);
        let teamvisitor = new Team(1, 5);

        let match = new Match(date, teamlocal, teamvisitor);

        match.setScoreLocal = scoreLocal;
        match.setScoreVisitor = scoreVisitor;

        match.endMatch();

        match.setScoreLocal = scoreLocalFalse;
        match.setScoreVisitor = scoreVisitorFalse;

        expect(match.getScoreLocal).toEqual(scoreLocal);
        expect(match.getScoreVisitor).toEqual(scoreVisitor);
    }));


});