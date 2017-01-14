import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User, Rol, Genre } from '../../shared/user/user';
import { SystemManager } from '../../systemManager';
import { BDService } from '../bd.service';
import { UserLoggedService } from '../userLogged.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-manager',
  templateUrl: './login-manager.component.html',
  styleUrls: ['./login-manager.component.css'],
  providers: [BDService, UserLoggedService]
})
export class LoginManagerComponent extends SystemManager implements OnInit {

  private loginUser: User;
  private userBD: User;
  private isUserLogged: boolean;
  @Output() userLogged = new EventEmitter();

  constructor(private dataBaseService: BDService, private userLog: UserLoggedService, private router: Router) 
  {
  	super();
    console.log("HOLA");
    console.log(dataBaseService.connect);
  	SystemManager.dataBase = dataBaseService.connect;
    this.isUserLogged = false;
    this.loginUser = new User();
  }

  ngOnInit() { }

  onSubmit() 
  {
    this.userBD = SystemManager.dataBase.getUser(this.loginUser);

    if (this.userBD === null || this.userBD === undefined) 
    {
      console.log("Usuario No existe en la BD");
    } 
    else if (this.loginUser.getNick == this.userBD.getNick && this.loginUser.getPassword == this.userBD.getPassword) 
    {
      console.log("Usuario Logeado");

      this.userLog.getUserLogged().setUser(this.userBD);

      this.isUserLogged = true;
      this.userLogged.emit( {user: this.userBD});
    }
  }
}
