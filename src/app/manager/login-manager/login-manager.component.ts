import { Component, OnInit } from '@angular/core';
import { User, Rol, Genre } from '../../shared/user/user';
import { SystemManager } from '../../systemManager';
import { BDService } from '../bd.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-manager',
  templateUrl: './login-manager.component.html',
  styleUrls: ['./login-manager.component.css'],
  providers: [BDService]
})
export class LoginManagerComponent extends SystemManager implements OnInit {

  private loginUser: User;
  private userLogged: boolean;

  constructor(dataBaseService: BDService, private router: Router) 
  {
  	super();
    
  	SystemManager.dataBase = dataBaseService.connect;
    this.userLogged = false;
    this.loginUser = new User();
  }

  ngOnInit() { }

  onSubmit() 
  {
    let userBD = SystemManager.dataBase.getUser(this.loginUser);

    if (userBD === null || userBD === undefined) 
    {
      console.log("Usuario No existe en la BD");
    } 
    else if (this.loginUser.getNick == userBD.getNick && this.loginUser.getPassword == userBD.getPassword) 
    {
      console.log("Usuario Logeado");

      SystemManager.userLogged = userBD;
      this.userLogged = true;
      this.router.navigate(['/']);
    }
  }
}
