import { Component, OnInit } from '@angular/core';
import { User, Rol, Genre } from '../../../shared/user/user';
import { BDService } from '../../bd.service';
import { MongoAPIService } from '../../../bd/mongoapi.service';


@Component({
  selector: 'delete-sponsor',
  templateUrl: './delete-sponsor.component.html',
  styleUrls: ['./delete-sponsor.component.css']
})
export class DeleteSponsorComponent implements OnInit {

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
          console.log("Patrocinador no existe en la BD");
          window.alert("No existe en la BD");
        }
        else {

          let u: User = new User();
          u.setRol = data[0].rol;

          if (u.getRol === Rol.SPONSOR) {
            console.log("Patrocinador borrado de la BD");
            window.alert("Patrocinador borrado de la BD");
            let i: number = this.service.users.indexOf(u);
            this.service.users.splice(i);
            this.service.mongoDelete("User", data[0]._id.$oid).subscribe();
          }
          else {
            window.alert("No es un patrocinador");
            console.log("No es un Patrocinador");
          }
        }
      });
  }
}
