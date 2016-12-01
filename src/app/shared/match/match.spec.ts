import { TestBed, async } from '@angular/core/testing';
import { Match } from './match';
import { User } from './../team/team'; 

describe('Match', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                Match
            ],
        });
    });

    it('se construye llamando al constructor', async(() => {

        let match = new Match();

        expect(match).toBeDefined;   
    }));

    it('se construye llamando al constructor', async(() => {

        let match = new Match();

        expect(match).toBeDefined;   
    }));


});