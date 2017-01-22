import { Component, OnInit } from '@angular/core';
import { User, Rol, Genre } from '../../../shared/user/user';
import { BDService } from '../../bd.service';
import { MongoAPIService } from '../../../bd/mongoapi.service';




@Component({
  selector: 'new-sponsor',
  templateUrl: './new-sponsor.component.html',
  styleUrls: ['./new-sponsor.component.css']
})
export class NewSponsorComponent implements OnInit {

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
            this.newUser.setRol = Rol.SPONSOR;
            console.log("Creado el nuevo sponsor en la BD");
            window.alert("Sponsor creado en la BD");
            this.service.users.push(this.newUser);
            this.service.mongoInsert("User", this.newUser).subscribe();
        }
        else {
          console.log("Ya existe en la BD");
        }
        
      }
    );
  }
}
