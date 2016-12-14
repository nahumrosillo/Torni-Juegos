import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserManagerComponent } from './manager/user-manager/user-manager.component';
import { LoginManagerComponent } from './manager/login-manager/login-manager.component';
import { BDService } from './manager/bd.service';

import { AppRouting } from './app.routing';
import { RegisterUserManagerComponent } from './manager/register-user-manager/register-user-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    UserManagerComponent,
    LoginManagerComponent,
    RegisterUserManagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting
  ],
  providers: [BDService],
  bootstrap: [AppComponent]
})

export class AppModule { }
