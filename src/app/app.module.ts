import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';
import { UserProfileComponent } from './user-profile/user-profile.component';

import {routes } from './app.routes';
import { GmailLoginComponent } from './gmail-login/gmail-login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './core/auth.service';



@NgModule({
  
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    CoreModule,
    routes

  ],
  declarations: [ AppComponent, UserProfileComponent, GmailLoginComponent, NavbarComponent ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
