import { User } from './user';


export interface Iterator
{
     begin(): any;
     next(): any;
     end(): any;
     hasNext(): boolean;
     __increment(): any;
}

export interface Aggregator {
    iterator(): Iterator;
}

class IndexIterator implements Iterator
{
    private index: number = 0;
    //endd: boolean;
    collection: any;

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
        if(this.index < this.collection.size)
            return true;
        else
            return false;
    }

    end(): any {
        return this.collection[this.collection.size-1];
    }

    __increment(): any {
        return this.collection[this.index++];
    }
}

/*class TeamIterator implements Iterator<User>
{
    index: number;

    constructor(public Users: Set<User>)
    {
        //this.index = Users.size - 1;
        this.index = 0;
    }

    next(): IteratorResult<User>
    {
        if (this.index >= this.Users.size)
        {
            return {
                value: undefined,
                done: true
            };
        }
        else
        {
            return {
                value: this.Users[this.index++],
                done: false
            }
        }
    }

    __increment()
    {
        this.index++;
    }

    /*begin(): User
    {
        return this.Users[0],
    }

    end(): User
    {
        return this.Users[this.Users.size-1];
    }
}*/


export class Team implements Aggregator
{

    private static numTeams: number = 0;
    private id: number;
    private maxPlayers: number;
    private Users: Set<User>;

    /*[Symbol.iterator]() 
    {
        return new IndexIterator(this.Users);
    }*/
    constructor() {
        this.id = Team.numTeams;
        Team.numTeams++;
        this.Users = new Set<User>();

        //this.Users.values;
    }

    iterator(): Iterator {
        return new IndexIterator(this.Users);
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

    /*get begin(): Iterator<User> {
        //return this.Users.values;
        /*return {
            done: false,
            value: this.Users[0]
        }
        //return this.Users[0];
        return new TeamIterator(this.Users);
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
        }
    }

    public next(): IteratorResult<User> {

        return {
            done: false,
            value: this.Users[2]
        }
    }*/
}

