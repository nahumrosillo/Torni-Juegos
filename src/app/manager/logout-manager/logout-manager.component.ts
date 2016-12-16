import { Component, OnInit } from '@angular/core';
import { User, Rol, Genre } from '../../shared/user/user';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-logout-manager',
  templateUrl: './logout-manager.component.html',
  styleUrls: ['./logout-manager.component.css']
})
export class LogoutManagerComponent implements OnInit {

  constructor(private router: Router) 
  {
    this.router.navigate(['/home']);
  }

  ngOnInit() { }
}
