import { Component, OnInit, OnDestroy } from '@angular/core';
import { User, Rol, Genre } from '../../shared/user/user';
import { SystemManager } from '../../systemManager';
import { BDService } from '../bd.service';




@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.css'],
  providers: [BDService]
})
export class UserManagerComponent extends SystemManager implements OnInit {


  private userLogged: User;

  constructor(dataBaseService: BDService) {
  	super();
  	SystemManager.dataBase = dataBaseService.connect;
    this.userLogged = SystemManager.userLogged;
  }

  ngOnInit() {

  }
}
