import { Component } from '@angular/core';
import { User, Rol, Genre } from './shared/user/user';
import { Router } from '@angular/router';
import { UserLoggedService } from './manager/userLogged.service';
import { MongoAPIService } from './bd/mongoapi.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserLoggedService, MongoAPIService]
})
export class AppComponent
{
  title = 'Torni-Juegos';
  private userLogged: User;
  private loginTerminated: boolean;
  name: string;


  constructor(private router: Router, private userLog: UserLoggedService, private service: MongoAPIService) {
    this.loginTerminated = false;

    console.log("Constructor de App Component. Se acaba de llamar al constructor de mongodb.service");


  }

  onUserLogged(user) {
    this.loginTerminated = true;
    this.userLogged = user;
    this.userLog.getUserLogged().setUser = user;
    this.name = this.userLog.getUserLogged().getUser().getNick;
    this.router.navigate(['/gamemanager']);
  }

  onLogout() {
    this.loginTerminated = false;
  }
}
