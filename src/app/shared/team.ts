import * as Collection from 'typescript-collections';
import { User } from './user';

export class Team
{
    private static numTeams: number = 0;
    private id: number;
    private maxPlayer: number;
    private Users = new Collection.Set<User>();

    constructor() {
        this.id = Team.numTeams;
        Team.numTeams++;
    }

    public setMaxPlayer(numMax: number): void {
        this.maxPlayer = numMax;
    }

    public setPlayerIntoTeam(user: User): void {
        this.Users.add(user);
    }

    public getId(): number {
        return this.id;
    }

    public getMaxPlayer(): number {
        return this.maxPlayer;
    }

    public isFull(): boolean {
        return this.Users.size() == this.maxPlayer;
    }
}