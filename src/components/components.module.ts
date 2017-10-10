import { Angular2SocialLoginModule } from 'angular2-social-login';
import { NgModule } from '@angular/core';
//import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@NgModule({
	declarations: [],
	imports: [Angular2SocialLoginModule],
	exports: []
})
export class ComponentsModule {}


let providers = {
	"facebook": {
	  "clientId": "106623946369988",
	  "apiVersion": "v2.10" //like v2.4
	}
  };
  Angular2SocialLoginModule.loadProvidersScripts(providers);