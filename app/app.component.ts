import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { TodoComponent } from './todo.component';
import { TodoService } from './todo.service';

@Component({
  selector: 'my-app',
    templateUrl: './app/app.component.html'

})
export class AppComponent {
  constructor() { }
}