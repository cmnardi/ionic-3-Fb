import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Angular2SocialLoginModule } from "angular2-social-login";
import { Facebook } from '@ionic-native/facebook';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from './../pages/login/login';
import { LoginNativoPage } from './../pages/login-nativo/login-nativo';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    LoginNativoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    LoginNativoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook
  ]
})
export class AppModule {}

let providers = {
  "facebook": {
    "clientId": "155250345072950",
    "apiVersion": "v2.10" //like v2.4
  }
};
Angular2SocialLoginModule.loadProvidersScripts(providers);