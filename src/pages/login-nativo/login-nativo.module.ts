import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginNativoPage } from './login-nativo';

@NgModule({
  declarations: [
    LoginNativoPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginNativoPage),
  ],
})
export class LoginNativoPageModule {}
