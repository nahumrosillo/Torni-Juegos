import { Component, OnInit } from '@angular/core';
import { User, Rol, Genre } from '../../../shared/user/user';
import { BDService } from '../../bd.service';
import { UserLoggedService } from '../../userLogged.service';
import { MongoAPIService } from '../../../bd/mongoapi.service';




@Component({
  selector: 'new-admin',
  templateUrl: './new-admin.component.html',
  styleUrls: ['./new-admin.component.css']
})
export class NewAdminComponent implements OnInit {

  private newUser: User;
  private db: any;

  constructor(private dataBase: BDService, private service: MongoAPIService) {
    this.newUser = new User();
    this.db = dataBase.connect;
  }

  ngOnInit() {

  }

  onSubmit() {

    this.service.mongoSelect("User", "{nick:'" + this.newUser.getNick + "'}").subscribe(
      data => {

        console.log(data[0]);

        if (data[0] === undefined || data[0] === null) {
            this.newUser.setRol = Rol.ADMINISTRATOR;
            console.log("Creado el nuevo admin en la BD");
            window.alert("Admin creado en la BD");
            this.service.users.push(this.newUser);
            this.service.mongoInsert("User", this.newUser).subscribe();
        }
        else {
          console.log("Ese admin ya existe en la BD");
          window.alert("Ya existe en la BD");
        }
        
      }
    );
  }
}
