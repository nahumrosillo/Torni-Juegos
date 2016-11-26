/**
 * Created by nahum on 26/11/16.
 */

import { TestBed, async } from '@angular/core/testing';
import { User } from './user';

let user: User;

describe('User', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                User
            ],
        });

        user = new User();

    });

    it('se construye llamando al constructor predeterminado', async(() => {
        expect(user).toBeDefined();
    }));

    it('se construye un usuario vacio', async(() => {
        expect(user.getNick()).toEqual('null');
        expect(user.getBirthDate()).toBeUndefined();
        expect(user.getDni()).toBeUndefined();
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