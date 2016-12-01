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

        //Testing isFull when false
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

        //Testing isFull when true
        expect(team.isFull).toEqual(true);
    }));

    it('prueba de iteradores', async(() => {
        
        let teamFour: Team = new Team();
        let maxPlayers = 4;

        teamFour.setMaxPlayers = maxPlayers;

        let user1: User = new User();
        user1.setNick = 'usuario1';
        let user2: User = new User();
        user2.setNick = 'usuario2';
        let user3: User = new User();
        user3.setNick = 'usuario3';
        let user4: User = new User();
        user4.setNick = 'usuario4';


        teamFour.setPlayerIntoTeam = user1;
        teamFour.setPlayerIntoTeam = user2;
        teamFour.setPlayerIntoTeam = user3;
        teamFour.setPlayerIntoTeam = user4;


        let iterador = teamFour.iterator();

        //Testing begin
        expect(iterador.begin().getNick).toEqual('usuario1'); 
        //Testing end
        expect(iterador.end().getNick).toEqual('usuario4'); 
        //Testing hasNext when true
        expect(iterador.hasNext()).toEqual(true); 

        //Testing next and current
        expect(iterador.current().getNick).toEqual('usuario1'); 
        iterador.next();
        expect(iterador.current().getNick).toEqual('usuario2');
        iterador.next();
        expect(iterador.current().getNick).toEqual('usuario3');
        iterador.next();
        expect(iterador.current().getNick).toEqual('usuario4');

        //Testing hasNext when false 
        expect(iterador.hasNext()).toEqual(false); 
        

        let iterador2 = teamFour.iterator();
        
        //Testing for iterator
        for(; iterador2.current() != iterador2.end() ; iterador2.next());

        expect(iterador2.current().getNick).toEqual('usuario4');

        
    }));

});