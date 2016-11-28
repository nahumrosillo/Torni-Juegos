import { User } from './user';

export class Team
{
    private static numTeams: number = 0;
    private id: number;
    private maxPlayers: number;
    private Users;
    //private iterator: Iterator;

    constructor() {
        this.id = Team.numTeams;
        Team.numTeams++;
        this.Users = new Set();
    }

    set setMaxPlayers(numMax: number) {  //UT
        this.maxPlayers = numMax;
    }

    set setPlayerIntoTeam(user: User) { //UT
        this.Users.add(user);
    }

    get getId(): number { //UT
        return this.id;
    }

    get getMaxPlayers(): number { //UT
        return this.maxPlayers;
    }

    get getNumPlayers(): number { //UT
        return this.Users.size;
    }

    get isFull(): boolean { //UT
        return this.Users.size == this.maxPlayers;
    }

    get begin(): any {
        return this.Users.entries;
    }

    get end(): any {

        let iter = this.Users.entries;

        for(let i of this.Users)
        {
            iter.next();
        }

        return iter;
    }
}