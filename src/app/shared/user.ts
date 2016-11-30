/**
 * Created by nahum on 26/11/16.
*/

export enum Rol {
    NULL,
    SUPERADMIN,
    ADMINISTRATOR,
    SPONSOR,
    PLAYER
}

export enum Genre {
    MALE,
    FEMALE
}

export class User {
    private nick: string;
    private name: string;
    private dni: string;
    private birthDate: Date;
    private rol: Rol;
    private genre: Genre;

    constructor() {
        this.nick = 'null';
        this.rol = Rol.NULL;
        this.genre = Genre.MALE;
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

    set setRol(rol: Rol) {
        this.rol = rol;
    }

    set setBirthDate(birthdate: Date) {
        this.birthDate = birthdate;
    }

    set setGenre(genre: Genre) {
        this.genre = genre;
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

    get getRol(): Rol {
        return this.rol;
    }

    get getGenre(): Genre {
        return this.genre;
    }

    get isEmpty(): boolean {
        return this.getNick === 'null';
    }

    isEqual(user: User): boolean {
        if (user.nick === this.nick &&
            user.dni === this.dni &&
            user.genre === this.genre &&
            user.getRol === this.rol &&
            user.getBirthDate === this.birthDate &&
            user.name === this.name) {

            return true;
        } else {
            return false;
        }
    }
}
