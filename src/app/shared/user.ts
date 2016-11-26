/**
 * Created by nahum on 26/11/16.
 */

export class User
{
    private nick: string;
    private name: string;
    private dni: string;
    private birthDate: Date;

    constructor() {
        this.nick = 'null';
    }

    public setNick(nick: string): void {
        this.nick = nick;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setDni(dni: string): void {
        this.dni = dni;
    }

    public setBirthDate(birthdate: Date): void {
        this.birthDate = birthdate;
    }

    public getNick(): string {
        return this.nick;
    }

    public getDni(): string {
        return this.dni;
    }

    public getBirthDate(): Date {
        return this.birthDate;
    }

    public isEmpty(): boolean {
        return this.getNick() == 'null';
    }
}