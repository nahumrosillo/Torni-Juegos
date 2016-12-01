import { User } from './user';
import { Iterator } from './../util/iterator/iterator';
import { IndexIterator} from './../util/iterator/indexIterator';
import { Aggregator } from './../util/iterator/aggregator';


export class Team implements Aggregator
{

    private static numTeams: number = 0;
    private id: number;
    private maxPlayers: number;
    private Users: Array<User>;


    constructor() {
        this.id = Team.numTeams;
        Team.numTeams++;
        this.Users = new Array<User>();
    }

    iterator(): Iterator {
        return new IndexIterator(this.Users);
    }

    set setMaxPlayers(numMax: number) {  //UT
        this.maxPlayers = numMax;
    }

    set setPlayerIntoTeam(user: User) { //UT
        if(this.Users.length != this.maxPlayers)
            this.Users.push(user);
    }

    get getId(): number { //UT
        return this.id;
    }

    get getMaxPlayers(): number { //UT
        return this.maxPlayers;
    }

    get getNumPlayers(): number { //UT
        return this.Users.length;
    }

    get isFull(): boolean { //UT
        return this.Users.length == this.maxPlayers;
    }
}