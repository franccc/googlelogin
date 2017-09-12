import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private authService: AuthenticationService) {

  }

  login(){
    this.authService.login()
      .then((data)=>{
        console.log(data);
        alert('Loggeado exitosamente!');
      })
      .catch((error)=>{
        console.log(error);
        alert('Hubo un error');
      })
  }

  getToken(){
    this.authService.myPost();
    
  }
}
