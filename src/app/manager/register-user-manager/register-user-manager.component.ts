import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User, Rol, Genre } from '../../shared/user/user';
import { SystemManager } from '../../systemManager';
import { MongoAPIService } from '../../bd/mongoapi.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user-manager',
  templateUrl: './register-user-manager.component.html',
  styleUrls: ['./register-user-manager.component.css'],
  providers: [MongoAPIService]
})


export class RegisterUserManagerComponent extends SystemManager implements OnInit {

	private newUser: User;
  constructor(private dataBaseService: MongoAPIService, private router: Router) 
  {
  	super();
    
  	//SystemManager.dataBase = dataBaseService.connect;
    this.newUser = new User();
  }

	ngOnInit() { }


	onSubmit() 
	{
    var u: User;
    this.dataBaseService.mongoSelect("User", "{nick:'" + this.newUser.getNick + "'}").subscribe
      (data => {
        u=data;
        if(u[0]!=this.newUser)
          this.dataBaseService.mongoInsert("User", this.newUser).subscribe(data =>{
            console.log("Archivo añadido");
          });
    });
    /*
    //let userBD = SystemManager.dataBase.getUser(this.newUser);
    var userBD;
    this.db.getUser(this.newUser).then(function(res,err){
      if(err){
        console.log("Hubo un error");
      }
      else{
        userBD=res;
      }
    });
    console.log("Llamando a añadir");
    userBD.then(function(res){
      if ((userBD === null || userBD === undefined)res === null || res === undefined) 
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
    */
  }
}
