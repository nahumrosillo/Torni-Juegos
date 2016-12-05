import { Component, OnInit } from '@angular/core';
import { User, Rol, Genre } from '../../shared/user/user';
import { SystemManager } from '../systemManager';
import { BDService } from '../bd.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login-manager',
  templateUrl: './login-manager.component.html',
  styleUrls: ['./login-manager.component.css'],
  providers: [BDService]
})
export class LoginManagerComponent extends SystemManager implements OnInit {

  loginUser: User;

  constructor(dataBaseService: BDService) {
  	super();
  	SystemManager.dataBase = dataBaseService.connect;
  }

  ngOnInit() {
      this.loginUser = new User();
  }

  onSubmit() {
    let userBD = SystemManager.dataBase.getUser(this.loginUser);

    if (userBD === null || userBD === undefined) {
      console.log("Usuario No existe en la BD");
    } else if (this.loginUser.getNick == userBD.getNick && this.loginUser.getPassword == userBD.getPassword) {
      SystemManager.userLogged = userBD;
      console.log("Usuario Logeado");
    }
  }

}
