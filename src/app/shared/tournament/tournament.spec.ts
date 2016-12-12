import { TestBed, async } from '@angular/core/testing';
import { Tournament } from './tournament';
import { Match } from './../match/match';
import { Iterator } from './../../util/iterator/iterator';

let tournament: Tournament;

let inidate: Date;// = new Date();
//inidate.setFullYear(2016, 9, 5);
let findate: Date;
let iniTdate: Date;
let finTdate: Date;

let match1: Match;
let match2: Match;
let match3: Match;
let match4: Match;

let matchs: Array<Match>;

describe('Tournament', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                Tournament
            ],
        });   

        inidate = new Date(2016, 9, 5, 0, 0, 0, 0);
        findate = new Date(2016, 10, 5, 0, 0, 0, 0);
        iniTdate = new Date(2016, 11, 5, 0, 0, 0, 0);
        finTdate = new Date(2016, 12, 5, 0, 0, 0, 0);

        match1 = new Match(inidate);
        match2 = new Match(findate);
        match3 = new Match(iniTdate);
        match4 = new Match(finTdate);

        matchs = [ match1, match2, match3, match4 ];
        tournament = new Tournament(inidate, findate, iniTdate, finTdate, matchs);    
    });

    it('Se construye llamando al constructor', async(() => {

        expect(tournament).toBeDefined();
    }));

    it('Los getters devuelven el valor correctamente', async(() => {

        let iniInsc: Date = new Date(2016, 9, 5, 0, 0, 0, 0);
        let finInsc: Date = new Date(2016, 10, 5, 0, 0, 0, 0);
        let iniTour: Date = new Date(2016, 11, 5, 0, 0, 0, 0);
        let finTour: Date = new Date(2016, 12, 5, 0, 0, 0, 0);

        expect(tournament.getStartInscription).toEqual(iniInsc);
        expect(tournament.getEndInscription).toEqual(finInsc);
        expect(tournament.getStartTournament).toEqual(iniTour);
        expect(tournament.getEndTournament).toEqual(finTour);
        expect(tournament.getAward).toEqual('null');
    }));

    it('Los setters asignan los valores correctos', async(() => {
        
        let iniInsc: Date = new Date(2017, 9, 5, 0, 0, 0, 0);
        let finInsc: Date = new Date(2017, 10, 5, 0, 0, 0, 0);
        let iniTour: Date = new Date(2017, 11, 5, 0, 0, 0, 0);
        let finTour: Date = new Date(2017, 12, 5, 0, 0, 0, 0);
        
        let award = 'Trofeo de oro';

        tournament.setStartInscription = iniInsc;
        tournament.setEndInscription = finInsc;
        tournament.setStartTournament = iniTour;
        tournament.setEndTournament = finTour;

        tournament.setAward = award;


        expect(tournament.getStartInscription).toEqual(iniInsc);
        expect(tournament.getEndInscription).toEqual(finInsc);
        expect(tournament.getStartTournament).toEqual(iniTour);
        expect(tournament.getEndTournament).toEqual(finTour);
        expect(tournament.getAward).toEqual(award);
    }));

    it('prueba de iteradores', async(() => {
        
        let dateMatch1: Date = new Date(2016, 9, 5, 0, 0, 0, 0);
        let dateMatch2: Date = new Date(2016, 10, 5, 0, 0, 0, 0);
        let dateMatch3: Date = new Date(2016, 11, 5, 0, 0, 0, 0);
        let dateMatch4: Date = new Date(2016, 12, 5, 0, 0, 0, 0);

        let iterador = tournament.iterator();

        //Testing begin
        expect(iterador.begin().getStartDate).toEqual(dateMatch1); 
        //Testing end
        expect(iterador.end().getStartDate).toEqual(dateMatch4); 
        //Testing hasNext when true
        expect(iterador.hasNext()).toEqual(true); 

        //Testing next and current
        expect(iterador.current().getStartDate).toEqual(dateMatch1); 
        iterador.next();
        expect(iterador.current().getStartDate).toEqual(dateMatch2);
        iterador.next();
        expect(iterador.current().getStartDate).toEqual(dateMatch3);
        iterador.next();
        expect(iterador.current().getStartDate).toEqual(dateMatch4);

        //Testing hasNext when false 
        expect(iterador.hasNext()).toEqual(false); 
        

        let iterador2 = tournament.iterator();
        
        //Testing for iterator
        for(; iterador2.current() !== iterador2.end() ; iterador2.next());

        expect(iterador2.current().getStartDate).toEqual(dateMatch4);

        
    }));

});