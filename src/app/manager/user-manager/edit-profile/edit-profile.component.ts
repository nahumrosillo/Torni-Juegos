import { Component, OnInit } from '@angular/core';
import { User, Rol, Genre } from '../../../shared/user/user';
import { BDService } from '../../bd.service';
import { UserLoggedService } from '../../userLogged.service';


@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  providers: [UserLoggedService, BDService]
})
export class EditProfileComponent implements OnInit 
{

  private userLogged: User;
  private bd: any;

  constructor(bdService: BDService, private userLog: UserLoggedService) {
      this.bd = bdService.connect;

      let user = this.userLog.getUserLogged().getUser();
      if (user !== null || user !== undefined)
        this.userLogged = this.userLog.getUserLogged().getUser();
      else
        this.userLogged = new User();
  }

  ngOnInit()
  {}

  onSubmit() 
  {
    this.bd.remove(this.userLogged);
    this.bd.add(this.userLogged);

    this.userLog.getUserLogged().setUser(this.userLogged);
  }
}
