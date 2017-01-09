import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';
import { UserManagerComponent } from './manager/user-manager/user-manager.component';
import { LoginManagerComponent } from './manager/login-manager/login-manager.component';
import { BDService } from './manager/bd.service';
import { UserLoggedService } from './manager/userLogged.service';

import { RegisterUserManagerComponent } from './manager/register-user-manager/register-user-manager.component';
import { NewAdminComponent } from './manager/user-manager/new-admin/new-admin.component';
import { DeleteAdminComponent } from './manager/user-manager/delete-admin/delete-admin.component';
import { NewSponsorComponent } from './manager/user-manager/new-sponsor/new-sponsor.component';
import { DeleteSponsorComponent } from './manager/user-manager/delete-sponsor/delete-sponsor.component';
import { EditProfileComponent } from './manager/user-manager/edit-profile/edit-profile.component';

import { GameManagerComponent } from './manager/game-manager/game-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    UserManagerComponent,
    LoginManagerComponent,
    RegisterUserManagerComponent,
    NewAdminComponent,
    DeleteAdminComponent,
    NewSponsorComponent,
    DeleteSponsorComponent,
    EditProfileComponent,
    GameManagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting
  ],
  providers: [BDService, UserLoggedService],
  bootstrap: [AppComponent]
})

export class AppModule { }
