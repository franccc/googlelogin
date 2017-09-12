import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthenticationService } from "../services/authentication.service";
import { Http } from "@angular/http";

export const firebaseConfig = {
  apiKey: "AIzaSyBnFgowb6FwIh-WeaTbGPO2R7ysMAQPli4",
  authDomain: "kinesis-177122.firebaseapp.com",
  databaseURL: "https://kinesis-177122.firebaseio.com",
  projectId: "kinesis-177122",
  storageBucket: "kinesis-177122.appspot.com",
  messagingSenderId: "673495488078"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenticationService,
    Http
  ]
})
export class AppModule {}
