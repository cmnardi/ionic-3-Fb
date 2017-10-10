import { FacebookLoginResponse, Facebook } from '@ionic-native/facebook';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginNativoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-nativo',
  templateUrl: 'login-nativo.html',
})
export class LoginNativoPage {
  
  usuario: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: Facebook) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginNativoPage');
  }

  loginNativo() {
    var that = this;
    this.fb.login(['public_profile', 'email'])
    .then(function (res: FacebookLoginResponse) { 
        console.log('Logged into Facebook!', res);
        //this.usuario = res;
        that.fb.api('/me?fields=id,name,email', []).then(data => {
              // Create the user object
              that.usuario = {
                access_token: res.authResponse.accessToken,
                name: data.name,
                email: data.email,
                facebook_id: data.id
              }
              console.info(data);
          })
      })
    .catch(e => console.log('Error logging into Facebook', e));
  };

  logout() {
    this.usuario = null;
    return this.fb.logout();
  }

}
