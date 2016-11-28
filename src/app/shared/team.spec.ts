import { TestBed, async } from '@angular/core/testing';
import { Team } from './team';
import { User } from './user';

let team: Team = new Team();
let user: User;

describe('Team', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                Team
            ],
        });

        //let team = new Team();

    });

    it('se construye llamando al constructor predeterminado', async(() => {
        expect(team).toBeDefined();
    }));

    it('se construye un equipo vacio', async(() => {
        expect(team.getId).toEqual(0);
        expect(team.getMaxPlayers).toBeUndefined();
    }));

    it('recibe un maximo de jugadores', async(() => {
        let maxPlayers = 5;

        team.setMaxPlayers = maxPlayers;
        expect(team.getMaxPlayers).toEqual(maxPlayers);

    }));

    it('equipo está o no lleno', async(() => {
        
        let maxPlayers = 3;
        expect(team.isFull).toEqual(false);

        team.setMaxPlayers = maxPlayers;

        team.setPlayerIntoTeam = user;
        team.setPlayerIntoTeam = user;
        team.setPlayerIntoTeam = user;
        team.setPlayerIntoTeam = user;
        team.setPlayerIntoTeam = user;

        expect(team.isFull).toEqual(true);
    }));

    it('prueba de iteradores', async(() => {
        
        let teamFour: Team = new Team();
        let maxPlayers = 4;

        teamFour.setMaxPlayers = maxPlayers;

        let user1: User = new User();
        user1.setNick('usuario1');
        let user2: User = new User();
        user1.setNick('usuario2');
        let user3: User = new User();
        user1.setNick('usuario3');
        let user4: User = new User();
        user1.setNick('usuario4');



        teamFour.setPlayerIntoTeam = user1;
        teamFour.setPlayerIntoTeam = user2;
        teamFour.setPlayerIntoTeam = user3;
        teamFour.setPlayerIntoTeam = user4;

        let iterador = teamFour.begin;
        expect(iterador.next.values).toEqual('usuario1');
        expect(iterador.next.values).toEqual('usuario2');
        expect(iterador.next.values).toEqual('usuario3');
        expect(iterador.next.values).toEqual('usuario4');

        let iterador2 = teamFour.begin;

        for(; iterador2 != teamFour.end ; iterador2++);

        expect(iterador2.next().values).toEqual('usuario4');

    }));

});