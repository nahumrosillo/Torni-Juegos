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

    set setNick(nick: string) {
        this.nick = nick;
    }

    set setName(name: string) {
        this.name = name;
    }

    set setDni(dni: string) {
        this.dni = dni;
    }

    set setBirthDate(birthdate: Date) {
        this.birthDate = birthdate;
    }

    get getNick(): string {
        return this.nick;
    }

    get getDni(): string {
        return this.dni;
    }

    get getBirthDate(): Date {
        return this.birthDate;
    }

    get isEmpty(): boolean {
        return this.getNick == 'null';
    }
}