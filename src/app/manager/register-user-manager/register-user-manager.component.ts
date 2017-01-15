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
  private db;
  constructor(dataBaseService: BDService, private router: Router) 
  {
  	super();
    
  	//SystemManager.dataBase = dataBaseService.connect;
    this.db=dataBaseService;
    this.newUser = new User();
    console.log("constructor registeruser" + this.db);
  }

	ngOnInit() { }


	onSubmit() 
	{
    //let userBD = SystemManager.dataBase.getUser(this.newUser);
    var userBD=this.db.getUser(this.newUser);
    userBD.then(function(res){
      if (/*(userBD === null || userBD === undefined)*/res === null || res === undefined) 
    {
      //SystemManager.dataBase.add(this.newUser);
      this.db.add(this.newUser).then(function(res){
          console.log("Agregado a la BD");
      }, function(err){
        console.log("Error al introducir en la bd");
      });
    	
    } 
    else 
    {
     		console.log("Usuario ya existe en la BD");
    }
      
    });
    console.log("userdb" + JSON.stringify(userBD));
    
  }
}
