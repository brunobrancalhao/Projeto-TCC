import { AuthProvider } from './../providers/auth/auth';
import { Component } from '@angular/core';
import { Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {IndexPage} from '../pages/index/index'
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  nome1 = localStorage.getItem('nome');
  email = localStorage.getItem('email');
  nome = '';
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private Auth: AuthProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      let user = localStorage.getItem('user');
      if(user){
        this.nome = this.nome1.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
        this.rootPage = IndexPage;
      } else {
        this.rootPage = HomePage;
      }
      statusBar.styleDefault();
      splashScreen.hide();
    }); 
  }

  sair(){
    localStorage.removeItem('user');
    localStorage.removeItem('nome');
    localStorage.removeItem('email');
    this.rootPage = HomePage;
  }
}

