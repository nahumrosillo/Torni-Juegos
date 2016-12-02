import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserManagerComponent } from './manager/user-manager/user-manager.component';
import { BDService } from './manager/bd.service';

@NgModule({
  declarations: [
    AppComponent,
    UserManagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BDService],
  bootstrap: [AppComponent]
})

export class AppModule { }
