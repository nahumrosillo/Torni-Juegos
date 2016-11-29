import { User } from './user';





class SetIterator implements Iterator<User> 
{ 
  index: number; 
 
  constructor( 
    public array: Array<User>
  ) { 
    this.index = array.length - 1; 
  } 
 
  next(): IteratorResult<User> { 
    if (this.index <= this.array.length) { 
      return { 
        value: undefined, 
        done: true 
      }; 
    } else { 
      return { 
        value: this.array[this.index--], 
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
    public Users: Array<User>;


    constructor() {
        this.id = Team.numTeams;
        Team.numTeams++;
        this.Users = new Array<User>();
    }

    [Symbol.iterator]() {
    
    return new SetIterator(this.Users);

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

