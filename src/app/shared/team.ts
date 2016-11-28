import { User } from './user';

class TeamIterator implements Iterator<User>
{
    index: number;

    constructor(public Users: Set<User>)
    {
        this.index = Users.size - 1;
    }

    next(): IteratorResult<User>
    {
        if (this.index <= this.Users.size)
        {
            return {
                value: undefined,
                done: true
            };
        }
        else
        {
            return {
                value: this.Users[this.index--],
                done: false
            }
        }
    }
}

export class Team
{

    private static numTeams: number = 0;
    private id: number;
    private maxPlayers: number;
    private Users: Set<User>;

    [Symbol.iterator]() 
    {
        return new TeamIterator(this.Users);
    }
    constructor() {
        this.id = Team.numTeams;
        Team.numTeams++;
        this.Users = new Set<User>();

        this.Users.values;
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

}