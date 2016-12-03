import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user/user';
import { SystemManager } from '../systemManager';
import { BDService } from '../bd.service';

@Component({
  selector: 'app-login-manager',
  templateUrl: './login-manager.component.html',
  styleUrls: ['./login-manager.component.css'],
  providers: [BDService]
})
export class LoginManagerComponent extends SystemManager implements OnInit {

  private newUser: User;

  constructor(dataBaseService: BDService) {
  	super();
  	SystemManager.dataBase = dataBaseService.connect;
  }

  ngOnInit() {
      this.newUser = new User();
  }

  onSubmit() {
    if (SystemManager.dataBase.getUser(this.newUser) == this.newUser) {
      SystemManager.userLogged = this.newUser;
      console.log("Usuario Logeado: " + this.newUser);
    } else {
      console.log("Usuario No Existe");
    }
  }

}
