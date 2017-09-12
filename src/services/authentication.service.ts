import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { Http, Response} from '@angular/http';

@Injectable()
export class AuthenticationService {

    constructor(public afAuth: AngularFireAuth,
               private http: Http) {
    }

    login() {
        return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    myPost(){
       return this.http.post('https://www.googleapis.com/calendar/v3/calendars','', '');
    }
}