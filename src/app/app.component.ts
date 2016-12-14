import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Torni-Juegos';
  id = 56;

  constructor(private router: Router) {}

  onSelectLogin() {
    this.router.navigate(['/login']);
  }

    onSelectRegister() {
    this.router.navigate(['/registeruser']);
  }
}
