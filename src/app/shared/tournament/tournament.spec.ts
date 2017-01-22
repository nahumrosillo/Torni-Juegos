import { TestBed, async } from '@angular/core/testing';
import { Tournament } from './tournament';
import { NormalTournament } from './normaltournament';
import { Match } from './../match/match';
import { Team } from './../team/team';
import { User } from './../user/user';
import { Iterator } from './../../util/iterator/iterator';
import { NormalMatchFactory } from '../../util/factory-method/match-factory/normal-match-factory';

let tournament: NormalTournament;

let inidate: Date;
let findate: Date;
let iniTdate: Date;
let finTdate: Date;

describe('NormalTournament', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                NormalTournament
            ],
        });   
    });

    it('Se construye llamando al constructor', async(() => {

        let name = 'Mario Bross Competition';
        inidate = new Date(2016, 8, 5, 0, 0, 0, 0);
        findate = new Date(2016, 9, 5, 0, 0, 0, 0);
        iniTdate = new Date(2016, 10, 5, 0, 0, 0, 0);
        finTdate = new Date(2016, 11, 5, 0, 0, 0, 0);

        let teams: Array<Team> =  new Array<Team>();

        teams.push(new Team(0, 5));
        teams.push(new Team(1, 5));
        teams.push(new Team(2, 5));
        teams.push(new Team(3, 5));

        inidate.getTime();

        let typeMatch: NormalMatchFactory = new NormalMatchFactory(iniTdate, finTdate, 4);

        tournament = new NormalTournament(name, inidate, findate, iniTdate, finTdate, teams, typeMatch);

        expect(tournament).toBeDefined();
    }));

    it('Los getters devuelven el valor correctamente', async(() => {

        inidate = new Date(2016, 8, 5, 0, 0, 0, 0);
        findate = new Date(2016, 9, 5, 0, 0, 0, 0);
        iniTdate = new Date(2016, 10, 5, 0, 0, 0, 0);
        finTdate = new Date(2016, 11, 5, 0, 0, 0, 0);

        let teams: Array<Team> =  new Array<Team>();

        teams.push(new Team(0, 5));
        teams.push(new Team(1, 5));
        teams.push(new Team(2, 5));
        teams.push(new Team(3, 5));

        let typeMatch: NormalMatchFactory = new NormalMatchFactory(iniTdate, finTdate, 4);

        tournament = new NormalTournament(name, inidate, findate, iniTdate, finTdate, teams, typeMatch);

        expect(tournament.getStartInscription).toEqual(inidate);
        expect(tournament.getEndInscription).toEqual(findate);
        expect(tournament.getStartTournament).toEqual(iniTdate);
        expect(tournament.getEndTournament).toEqual(finTdate);
        expect(tournament.getAward).toEqual('null');
    }));

    it('Los setters asignan los valores correctos', async(() => {
        
        inidate = new Date(2016, 8, 5, 0, 0, 0, 0);
        findate = new Date(2016, 9, 5, 0, 0, 0, 0);
        iniTdate = new Date(2016, 10, 5, 0, 0, 0, 0);
        finTdate = new Date(2016, 11, 5, 0, 0, 0, 0);

        let teams: Array<Team> =  new Array<Team>();

        teams.push(new Team(0, 5));
        teams.push(new Team(1, 5));
        teams.push(new Team(2, 5));
        teams.push(new Team(3, 5));

        let typeMatch: NormalMatchFactory = new NormalMatchFactory(iniTdate, finTdate, 4);

        tournament = new NormalTournament(name, inidate, findate, iniTdate, finTdate, teams, typeMatch);
        
        let award = 'Trofeo de oro';


        tournament.setAward = award;

        expect(tournament.getNumMatch).toEqual(2);
        expect(tournament.getAward).toEqual(award);
    }));

    it('prueba de iteradores', async(() => {
        
        inidate = new Date(2016, 8, 5, 0, 0, 0, 0);
        findate = new Date(2016, 9, 5, 0, 0, 0, 0);
        iniTdate = new Date(2016, 10, 5, 0, 0, 0, 0);
        finTdate = new Date(2016, 11, 5, 0, 0, 0, 0);

        let teams: Array<Team> =  new Array<Team>();

        teams.push(new Team(0, 5));
        teams.push(new Team(1, 5));
        teams.push(new Team(2, 5));
        teams.push(new Team(3, 5));

        let typeMatch: NormalMatchFactory = new NormalMatchFactory(iniTdate, finTdate, 4);

        tournament = new NormalTournament(name, inidate, findate, iniTdate, finTdate, teams, typeMatch);

        let iterador = tournament.iterator();

        //Testing begin
        expect(iterador.begin().getStartDate).toEqual(iniTdate); 

        expect(iterador.hasNext()).toEqual(true); 

        iterador.next();
        iterador.next();
        //Testing hasNext when false 
        expect(iterador.hasNext()).toEqual(false);       
    }));

    it('Torneo genera partidas cuando están finalizadas y finaliza el torneo', async(() => {
        
        inidate = new Date(2016, 8, 5, 0, 0, 0, 0);
        findate = new Date(2016, 9, 5, 0, 0, 0, 0);
        iniTdate = new Date(2016, 10, 5, 0, 0, 0, 0);
        finTdate = new Date(2016, 11, 5, 0, 0, 0, 0);

        let teams: Array<Team> =  new Array<Team>();

        teams.push(new Team(0, 5));
        teams.push(new Team(1, 5));
        teams.push(new Team(2, 5));
        teams.push(new Team(3, 5));

        let typeMatch: NormalMatchFactory = new NormalMatchFactory(iniTdate, finTdate, 4);

        tournament = new NormalTournament(name, inidate, findate, iniTdate, finTdate, teams, typeMatch);

        let iterador = tournament.iterator();

        expect(tournament.getNumMatch).toEqual(2);
        expect(tournament.getFinishedTournament).toEqual(false);

        iterador.current().endMatch();
        iterador.end().endMatch();

        expect(tournament.getNumMatch).toEqual(3);
        expect(tournament.getFinishedTournament).toEqual(false);

        iterador.end().endMatch();

        expect(tournament.getFinishedTournament).toEqual(true);

    }));

    it('El ganador de torneo es el ganador que debería ser', async(() => {
        
        inidate = new Date(2016, 8, 5, 0, 0, 0, 0);
        findate = new Date(2016, 9, 5, 0, 0, 0, 0);
        iniTdate = new Date(2016, 10, 5, 0, 0, 0, 0);
        finTdate = new Date(2016, 11, 5, 0, 0, 0, 0);

        let teams: Array<Team> =  new Array<Team>();

        teams.push(new Team(0, 5));
        teams.push(new Team(1, 5));
        teams.push(new Team(2, 5));
        teams.push(new Team(3, 5));

        let typeMatch: NormalMatchFactory = new NormalMatchFactory(iniTdate, finTdate, 4);

        tournament = new NormalTournament(name, inidate, findate, iniTdate, finTdate, teams, typeMatch);

        let iterador = tournament.iterator();

        iterador.current().setScoreLocal = 5;
        iterador.end().setScoreVisitor = 5;

        iterador.current().endMatch();
        iterador.end().endMatch();

        expect(iterador.end().getLocalTeam).toEqual(new Team(0, 5));
        expect(iterador.end().getVisitorTeam).toEqual(new Team(3, 5));

        iterador.end().setScoreVisitor = 5;

        iterador.end().endMatch();

        expect(tournament.getWinnerTournament).toEqual(new Team(3, 5));

    }));

    it('Torneo introduce y elimina usuarios', async(() => {
        
        inidate = new Date(2016, 8, 5, 0, 0, 0, 0);
        findate = new Date(2016, 9, 5, 0, 0, 0, 0);
        iniTdate = new Date(2016, 10, 5, 0, 0, 0, 0);
        finTdate = new Date(2016, 11, 5, 0, 0, 0, 0);

        let teams: Array<Team> =  new Array<Team>();

        teams.push(new Team(0, 1));
        teams.push(new Team(1, 1));
        teams.push(new Team(2, 1));
        teams.push(new Team(3, 1));

        let typeMatch: NormalMatchFactory = new NormalMatchFactory(iniTdate, finTdate, 4);

        tournament = new NormalTournament(name, inidate, findate, iniTdate, finTdate, teams, typeMatch);

        let user1: User = new User('user1');
        let user2: User = new User('user2');
        let user3: User = new User('user3');
        let user4: User = new User('user4');
        let user5: User = new User('user5');

        expect(tournament.searchPlayer(user1)).toEqual(false);

        tournament.addPlayer(user1);

        expect(tournament.searchPlayer(user1)).toEqual(true);

        tournament.removePlayer(user1);

        expect(tournament.searchPlayer(user1)).toEqual(false);

        tournament.addPlayer(user1);        
        tournament.addPlayer(user2);
        tournament.addPlayer(user3);
        expect(tournament.addPlayer(user4)).toEqual(true);
        expect(tournament.addPlayer(user5)).toEqual(false);
    }));
});