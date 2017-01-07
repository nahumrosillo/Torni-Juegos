import { NgModule }       from '@angular/core';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { LoginManagerComponent } from './manager/login-manager/login-manager.component';
import { UserManagerComponent } from './manager/user-manager/user-manager.component';
import { RegisterUserManagerComponent } from './manager/register-user-manager/register-user-manager.component';
import { NewAdminComponent } from './manager/user-manager/new-admin/new-admin.component';
import { DeleteAdminComponent } from './manager/user-manager/delete-admin/delete-admin.component';
import { NewSponsorComponent } from './manager/user-manager/new-sponsor/new-sponsor.component';
import { DeleteSponsorComponent } from './manager/user-manager/delete-sponsor/delete-sponsor.component';
import { EditProfileComponent } from './manager/user-manager/edit-profile/edit-profile.component';

// Route Configuration
export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: ''},
  {path: 'login', component: LoginManagerComponent },
  {path: 'usermanager', component: UserManagerComponent },
  {path: 'usermanager/newadmin', component: NewAdminComponent },
  {path: 'usermanager/deleteadmin', component: DeleteAdminComponent },
  {path: 'usermanager/newsponsor', component: NewSponsorComponent },
  {path: 'usermanager/deletesponsor', component: DeleteSponsorComponent },
  {path: 'usermanager/editprofile', component: EditProfileComponent },
  {path: 'registeruser', component: RegisterUserManagerComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRouting {}