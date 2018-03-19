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

import {routes } from '../app.routes';



@NgModule({
  
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    CoreModule

  ],
  declarations: [ AppComponent, UserProfileComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
