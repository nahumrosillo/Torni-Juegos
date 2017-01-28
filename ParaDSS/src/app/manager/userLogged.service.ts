import { Injectable } from '@angular/core';
import { UserLogged } from './../bd/userLogged';

@Injectable()
export class UserLoggedService 
{

    constructor() {}

    getUserLogged(): UserLogged
    {
       return UserLogged.getInstance;
    }
}