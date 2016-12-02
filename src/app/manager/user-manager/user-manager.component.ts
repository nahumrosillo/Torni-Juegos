import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user/user';
import { SystemManager } from '../systemManager';
import { BDService } from '../bd.service';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.css'],
  providers: [BDService]
})
export class UserManagerComponent extends SystemManager implements OnInit {

  constructor(bd: BDService) {
  	super();
  	SystemManager.dataBase = bd.instanciar();
  }

  ngOnInit() {
  }

  addUser(user: User) {
    SystemManager.dataBase.add(user);
  }

  getUser(user: User): User {
    return SystemManager.dataBase.getUser(user);
  }

  get isAvailableBD(): boolean {
    return (SystemManager.dataBase !== null 
      && SystemManager.dataBase !== undefined);
  }

}
