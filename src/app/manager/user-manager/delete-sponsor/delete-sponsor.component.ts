import { Component, OnInit } from '@angular/core';
import { User, Rol, Genre } from '../../../shared/user/user';
import { BDService } from '../../bd.service';


@Component({
  selector: 'delete-sponsor',
  templateUrl: './delete-sponsor.component.html',
  styleUrls: ['./delete-sponsor.component.css']
})
export class DeleteSponsorComponent implements OnInit {

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

    if (userBD !== null && userBD !== undefined && userBD.getRol === Rol.SPONSOR) 
    {
        this.db.remove(userBD);
        console.log("Sponsor borrado de la BD");
    } 
    else 
    {
      console.log("Usuario no existe o no es Sponsor");
    }

  }
}
