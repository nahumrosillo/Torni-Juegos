import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User, Rol, Genre } from '../../shared/user/user';
import { SystemManager } from '../../systemManager';
import { BDService } from '../bd.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user-manager',
  templateUrl: './register-user-manager.component.html',
  styleUrls: ['./register-user-manager.component.css'],
  providers: [BDService]
})


export class RegisterUserManagerComponent extends SystemManager implements OnInit {

	private newUser: User;

  constructor(dataBaseService: BDService, private router: Router) 
  {
  	super();
    
  	SystemManager.dataBase = dataBaseService.connect;
    this.newUser = new User();
  }

	ngOnInit() { }


	onSubmit() 
	{
    let userBD = SystemManager.dataBase.getUser(this.newUser);

    if (userBD === null || userBD === undefined) 
    {
      SystemManager.dataBase.add(this.newUser);
    	console.log("Agregado a la BD");
    } 
    else 
    {
     		console.log("Usuario ya existe en la BD");
    }
  }
}
