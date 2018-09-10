import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Storage} from "@ionic/storage";
import {IndexPage} from '../index/index'
import { HomePage } from '../home/home';
/**
 * Generated class for the AuthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage {
  isLoggedIn: Boolean;
  user: any;
  constructor(public storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
    this.storage.get('user').then((user) => {

      this.user = user;
      this.isLoggedIn = true;
    });
  }

  login(user) {

    this.navCtrl.push(IndexPage,{
        id_aluno: user
      });

}
lagi(){
    this.navCtrl.push(HomePage);
}

logout() {

    this.storage.remove('user').then(() => {
        this.isLoggedIn = false;
        this.user = null;
    });

}

isAuthenticated() {
    return this.isLoggedIn;
}

getUser() {
    return this.user;
}

}
