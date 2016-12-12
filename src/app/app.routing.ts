import { NgModule }       from '@angular/core';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginManagerComponent } from './manager/login-manager/login-manager.component';
import { UserManagerComponent } from './manager/user-manager/user-manager.component';

// Route Configuration
export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: ''},
  {path: 'login', component: LoginManagerComponent },
  {path: 'usermanager', component: UserManagerComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRouting {}