import { User } from './../user/user';
import { Iterator } from './../../util/iterator/iterator';
import { IndexIterator} from './../../util/iterator/indexIterator';
import { Aggregator } from './../../util/iterator/aggregator';


export class Team implements Aggregator {    
    private id: number;
    private maxPlayers: number;
    private Users: Array<User> = new Array<User>();

    constructor(id: number, maxPlayers: number) {
        this.id = id;
        this.maxPlayers = maxPlayers;
    }

    //Getters
    get getId(): number {
        return this.id;
    }

    get getUsers(): Array<User> {
        return this.Users;
    }

    get getMaxPlayers(): number {
        return this.maxPlayers;
    }

    get getNumPlayers(): number {
        return this.Users.length;
    }

    isFull(): boolean {
        return this.Users.length == this.maxPlayers;
    }
    
    //Setters
    addPlayerIntoTeam(user: User) {
        if(this.Users.length != this.maxPlayers)
            this.Users.push(user);
    }

    removePlayerIntoTeam(user: User) {
        let userToRemove = this.Users.indexOf(user);

        this.Users.splice(userToRemove);
    }

    searchPlayerIntoTeam(user: User): boolean {

        let exist: boolean = false;
        let userToSearch = this.Users.indexOf(user);

        if(userToSearch !== -1)
            exist = true;

        return exist;
    }

    iterator(): Iterator {
        return new IndexIterator(this.Users);
    }
}