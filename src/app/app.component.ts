import { AuthProvider } from './../providers/auth/auth';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, Nav,AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {IndexPage} from '../pages/index/index'
import { HomePage } from '../pages/home/home';
import { SobrePage } from '../pages/sobre/sobre';
import { FirebaseServiceProvider } from './../providers/firebase-service/firebase-service';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any;
  nome1 = localStorage.getItem('nome');
  email = localStorage.getItem('email');
  nome = '';
  constructor(platform: Platform,public dbService: FirebaseServiceProvider, statusBar: StatusBar, splashScreen: SplashScreen,public alertCtrl: AlertController) {
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

  sobre(){
    this.nav.push(SobrePage);
  }

  clearAll(){
    let user = localStorage.getItem('user');
    const confirm = this.alertCtrl.create({
      title: 'Tem certeza disso ?',
      message: 'Todas Suas Atividades serão Deletadas.',
      buttons: [
        {
          text: 'Não',
          handler: () => {
              console.log("aq");
          }
        },
        {
          text: 'Sim',
          handler: () => {
            this.dbService.clearAll(user);
            this.showAlert();
          }
        }
      ]
    });
    confirm.present();
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Atividades removidas!',
      buttons: ['OK']
    });
    alert.present();
  }

  sair(){
    localStorage.removeItem('user');
    localStorage.removeItem('nome');
    localStorage.removeItem('email');
    this.rootPage = HomePage;
  }
}

