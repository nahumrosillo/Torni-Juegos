import { TestBed, async } from '@angular/core/testing';
import { Team } from './team';

let team: Team;

describe('Team', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                Team
            ],
        });

        team = new Team();

    });

    it('se construye llamando al constructor predeterminado', async(() => {
        expect(team).toBeDefined();
    }));

    it('se construye un usuario vacio', async(() => {
        expect(team.getId()).toEqual('0');
        expect(team.getMaxPlayer()).toBeUndefined();
    }));

    it('recibe un Date', async(() => {
        let date = new Date();

        date.setFullYear(2016, 12, 5);
        user.setBirthDate(date);
        expect(user.getBirthDate()).toEqual(date);

        date.setFullYear(2016, 15, 89);
        user.setBirthDate(date);
        expect(user.getBirthDate()).toEqual(date);

        date.setFullYear(-1, 0, -19);
        user.setBirthDate(date);
        expect(user.getBirthDate()).toEqual(date);
    }));

    it('recibe un Nick', async(() => {
        user.setNick('Nahum');
        expect(user.getNick()).toEqual('Nahum');
        expect(user.isEmpty()).toBe(false);
    }));

    it('recibe un Dni', async(() => {
        user.setDni('32999999H');
        expect(user.getDni()).toEqual('32999999H');

    }));

});