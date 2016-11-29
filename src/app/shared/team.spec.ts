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
        let user1: User = new User();
        let user2: User = new User();
        let user3: User = new User();
        let user4: User = new User();
        let user5: User = new User();

        team.setMaxPlayers = maxPlayers;

        team.setPlayerIntoTeam = user1;
        team.setPlayerIntoTeam = user2;
        team.setPlayerIntoTeam = user3;

        expect(team.isFull).toEqual(true);
    }));

    it('prueba de iteradores', async(() => {
        
        let teamFour: Team = new Team();
        let maxPlayers = 4;

        teamFour.setMaxPlayers = maxPlayers;

        let user1: User = new User();
        user1.setNick = 'usuario1';
        let user2: User = new User();
        user1.setNick = 'usuario2';
        let user3: User = new User();
        user1.setNick = 'usuario3';
        let user4: User = new User();
        user1.setNick = 'usuario4';


        teamFour.setPlayerIntoTeam = user1;
        teamFour.setPlayerIntoTeam = user2;
        teamFour.setPlayerIntoTeam = user3;
        teamFour.setPlayerIntoTeam = user4;

        console.log(teamFour.getMaxPlayers);
        console.log(teamFour.getNumPlayers);
        
        for (let i of teamFour.Users)
        {
            console.log(i);
        }


        
        //console.log(iterador.begin().getNick);

        //expect(iterador.begin().getNick).toEqual('usuario1'); 
        /*
        //iterador = iterador.next();
        expect(iterador.getNick).toEqual('usuario2');
        //iterador = iterador.next();
        expect(iterador.getNick).toEqual('usuario3');
        //iterador = iterador.next();
        expect(iterador.getNick).toEqual('usuario4');

        let iterador2 = teamFour.iterator().begin();

        for(; iterador2 != iterador2.end() ; iterador2++);

        expect(iterador2.next().values).toEqual('usuario4');
        
*/
    }));

});