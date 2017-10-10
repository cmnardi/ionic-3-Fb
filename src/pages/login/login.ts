import { AuthService } from 'angular2-social-login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  sub: any;
  usuario: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _auth: AuthService) {
    this.usuario = null;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  click(str) {
    alert(str);
  }

  signIn(provider) {
    this.sub = this._auth.login(provider).subscribe(
      (data) => {
                  console.log(data);
                  this.usuario = data;
                  //user data
                  //name, image, uid, provider, uid, email, token (accessToken for Facebook & google, no token for linkedIn), idToken(only for google)
                },
              (error) => {
                  console.info(error)
                }
    );
    console.info(this.sub);
  }

  logout(){
    this._auth.logout().subscribe(
      (data)=>{
        //return a boolean value.
        if ( data ) {
          this.usuario = null;
        }
      }
    )
  }

}
