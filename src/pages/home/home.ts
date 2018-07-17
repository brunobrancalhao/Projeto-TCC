import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import {IndexPage} from '../index/index'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private toast : ToastController) {

  }

  irParaIndex(){
  	this.navCtrl.setRoot(IndexPage);
  }
}
