import { User } from './user';

export class Team implements Iterator<User>
{
    private static numTeams: number = 0;
    private id: number;
    private maxPlayers: number;
    private Users: Set<User>;
    //private iterator: Iterator;

    constructor() {
        this.id = Team.numTeams;
        Team.numTeams++;
        this.Users = new Set<User>();
    }

    set setMaxPlayers(numMax: number) {  //UT
        this.maxPlayers = numMax;
    }

    set setPlayerIntoTeam(user: User) { //UT
        if(this.Users.size != this.maxPlayers)
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

    get begin(): Iterator<User> {
        //return this.Users.values;
        /*return {
            done: false,
            value: this.Users[0]
        }*/
        return this.Users[0];
    }

    get end(): Iterator<User> {

        return this.Users[this.maxPlayers-1];
        /*let iter = this.begin;

        for(let i in this.Users)
        {
            iter = iter.next().value;
        }

        return iter;*/
        /*return {
            done: false,
            value: this.Users[this.maxPlayers-1]
        }*/
    }

    public next(): IteratorResult<User> {

        return {
            done: false,
            value: this.Users[2]
        }
    }

    /*export class TeamIterator implements Iterator<User>
    {
        private iterator: number;

        constructor() {
            this.iterator = 0;
        }

        public next(): IteratorResult<User> {
            return {
                done: false,
                value: this.Users[this.iterator++]
            }
        }
    }*/
}
