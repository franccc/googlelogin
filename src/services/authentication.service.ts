import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
// import { Http} from '@angular/http';

// Client ID and API key from the Developer Console
//var CLIENT_ID = '673495488078-sban3gobam8am3ci116i3s1fea2f4gk4.apps.googleusercontent.com';

// Array of API discovery doc URLs for APIs used by the quickstart
// var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
// var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

@Injectable()
export class AuthenticationService {

    constructor(public afAuth: AngularFireAuth) {
    }

    login() {
        return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
 
    init() {
        gapi.client.setApiKey(this.newFunction());
       //gapi.client.load('calendar', 'v3', listUpcomingEvents);
    }

    private newFunction(): string {
        return 'AIzaSyBnFgowb6FwIh-WeaTbGPO2R7ysMAQPli4';
    }
}