/**
 * Created by nahum on 26/11/16.
 */

import { TestBed, async } from '@angular/core/testing';
import { User } from './user';
import { Memory } from './memory';

let bd: Memory;
let user: User;

describe('Memory', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                Memory
            ],
        });

        bd = new Memory();
        user = new User();

    });

    it('se construye llamando al constructor predeterminado', async(() => {
        
        user.setNick = 'Nahum';
        bd.addUser(user);
    	bd.showUser();
    }));
});
