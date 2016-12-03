import { TestBed, async } from '@angular/core/testing';
import { Tournament } from './tournament';
import { Team } from './../team/team';
import { User } from './../user/user'; 
import { Match } from './../match/match';

describe('Tournament', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                Tournament
            ],
        });

    });

    it('se construye llamando al constructor', async(() => {

        let tournament = new Tournament();

        expect(tournament).toBeDefined();
    }));

});