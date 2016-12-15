import { Component } from '@angular/core';
import { User, Rol, Genre } from './shared/user/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'Torni-Juegos';
  private userLogged: User;
  private loginTerminated: boolean;


  constructor(private router: Router) {
    this.loginTerminated = false;
  }

  onUserLogged(user) {
    this.loginTerminated = true;
    this.userLogged = user;
  }
}
