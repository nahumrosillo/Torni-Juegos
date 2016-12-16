import { Component, OnInit } from '@angular/core';
import { User, Rol, Genre } from '../../../shared/user/user';
import { BDService } from '../../bd.service';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operator/map';
import Rx from 'rxjs/Rx';



@Component({
  selector: 'new-admin',
  templateUrl: './new-admin.component.html',
  styleUrls: ['./new-admin.component.css']
})
export class NewAdminComponent implements OnInit {

  private newUser: User;
  private db: any;

  constructor(private dataBase: BDService) {
    this.newUser = new User();
    this.db = dataBase.connect;
  }

  ngOnInit() {

  }

  onSubmit() {
    this.newUser.setRol = Rol.ADMINISTRATOR;
    let userBD = this.db.getUser(this.newUser);

    if (userBD === null || userBD === undefined) 
    {
      this.db.add(this.newUser);
      console.log("ADMIN agregado a la BD");
    } 
    else 
    {
      console.log("Usuario ya existe en la BD");
    }

  }
}
