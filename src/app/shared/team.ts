import { User } from './user';

export interface Iterator
{
    begin(): any;
    next(): any;
    end(): any;
    hasNext(): boolean;
    current(): any;
}

export interface Aggregator {
    iterator(): Iterator;
}

class IndexIterator implements Iterator
{
    private index: number = 0;
    private collection: any;

    constructor(collection: any) {
        this.collection = collection;
    }

    begin(): any {
        return this.collection[0];
    }
    next(): any {
       return this.collection[this.index++]; 
    }

    hasNext(): boolean{
        if(this.index < this.collection.length-1)
            return true;
        else
            return false;
    }

    end(): any {
        return this.collection[this.collection.length-1];
    }

    current(): any {
      return this.collection[this.index];
    }
}

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