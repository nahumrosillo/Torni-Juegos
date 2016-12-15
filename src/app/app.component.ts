import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { BDService } from './manager/bd.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BDService]
})
export class AppComponent
{
  title = 'Torni-Juegos';
  
  private statusLogged: boolean;


  constructor(private router: Router) 
  {

    this.statusLogged = false
  }

  onSelectLogin() {
    this.router.navigate(['/login']);
  }

  onSelectRegister() {
    this.router.navigate(['/registeruser']);

  }
}
