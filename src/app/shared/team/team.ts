import { User } from './../user/user';
import { Iterator } from './../../util/iterator/iterator';
import { IndexIterator} from './../../util/iterator/indexIterator';
import { Aggregator } from './../../util/iterator/aggregator';


export class Team implements Aggregator
{    
    private id: number;
    private maxPlayers: number;
    private Users: Array<User> = new Array<User>();


    constructor(id: number, maxPlayers: number) 
    {
        this.id = id;
        this.maxPlayers = maxPlayers;
    }

    //gets

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
    
    //sets
    set setPlayerIntoTeam(user: User) { //UT
        if(this.Users.length != this.maxPlayers)
            this.Users.push(user);
    }

    set removePlayerIntoTeam(user: User) 
    {
        let userToRemove = this.Users.indexOf(user);

        this.Users.splice(userToRemove);
    }

    //iterator
    iterator(): Iterator {
        return new IndexIterator(this.Users);
    }
}