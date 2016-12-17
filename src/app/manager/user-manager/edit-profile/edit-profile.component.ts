import { Component, OnInit } from '@angular/core';
import { User, Rol, Genre } from '../../../shared/user/user';
import { BDService } from '../../bd.service';


@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit 
{

  private userLogged: User;
  private bd: any;

  constructor(bdService: BDService) {
      this.bd = bdService.connect;

      // Tiene que inyectarle el usuario logeado
      this.userLogged = null;
  }

  ngOnInit()
  {}

  onSubmit() 
  {
    this.bd.remove(this.userLogged);
    this.bd.add(this.userLogged);

  }
}
