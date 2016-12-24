import { Component, OnInit } from '@angular/core';
import { User, Rol, Genre } from '../../../shared/user/user';
import { BDService } from '../../bd.service';




@Component({
  selector: 'delete-admin',
  templateUrl: './delete-admin.component.html',
  styleUrls: ['./delete-admin.component.css']
})
export class DeleteAdminComponent implements OnInit {

  private newUser: User;
  private db: any;

  constructor(private dataBase: BDService) {
    this.newUser = new User();
    this.db = dataBase.connect;
  }

  ngOnInit() {

  }

  onSubmit() {
    let userBD = this.db.getUser(this.newUser);

    if (userBD !== null && userBD !== undefined) 
    {
      if (userBD.getRol === Rol.ADMINISTRATOR) 
      {
        this.db.remove(userBD);
        console.log("ADMIN borrado de la BD");
      }
    } 
    else 
    {
      console.log("Usuario no existe o no es Admin");
    }

  }
}
