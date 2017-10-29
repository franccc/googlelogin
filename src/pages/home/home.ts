import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { AuthenticationService } from '../../services/authentication.service';
import { GooglePlus } from '@ionic-native/google-plus';
//import { AngularFireModule } from 'angularfire2';
import firebase from 'firebase';

//declare var goocalapi: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              // private authService: AuthenticationService,
              public googleplus: GooglePlus) {

  }

  // ionViewDidLoad(){
  //   goocalapi.handleClientLoad();
  // }

  login(){
    this.googleplus.login({
      'webClientId':'673495488078-q67ui6vifp2fagepb60khccvlf4vpvfd.apps.googleusercontent.com',
      'offline':true
    }).then(res => {
      alert("Paso1")
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
      .then(suc => {
        alert("Login con exito !!!")
      }).catch(ns => {
        alert("No se pudo ingresar")
      })
    })
  }

  // login(){
  //   this.authService.login()
  //     .then((data)=>{
  //       console.log(data);
  //       alert('Loggeado exitosamente!');
  //     })
  //     .catch((error)=>{
  //       console.log(error);
  //       alert('Hubo un error');
  //     })
  //   }


  // getToken(){
  //   this.authService.myPost();
  // }
}
