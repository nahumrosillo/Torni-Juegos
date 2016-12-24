import { Component, OnInit } from '@angular/core';
import { User, Rol, Genre } from '../../../shared/user/user';
import { BDService } from '../../bd.service';




@Component({
  selector: 'new-sponsor',
  templateUrl: './new-sponsor.component.html',
  styleUrls: ['./new-sponsor.component.css']
})
export class NewSponsorComponent implements OnInit {

  private newUser: User;
  private db: any;

  constructor(private dataBase: BDService) {
    this.newUser = new User();
    this.db = dataBase.connect;
  }

  ngOnInit() {

  }

  onSubmit() {
    this.newUser.setRol = Rol.SPONSOR;
    let userBD = this.db.getUser(this.newUser);

    if (userBD === null || userBD === undefined) 
    {
      this.db.add(this.newUser);
      console.log("Sponsor agregado a la BD");
    } 
    else 
    {
      console.log("Usuario ya existe en la BD");
    }

  }
}
