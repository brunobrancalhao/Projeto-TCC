import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgSwitch } from '@angular/common';
import { ModalController, Platform, ViewController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';

/**
 * Generated class for the AtividadesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-atividades',
  templateUrl: 'atividades.html',
})
export class AtividadesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AtividadesPage');
  }
  teste() {
    let profileModal = this.modalCtrl.create(ModalPage);
    profileModal.present();
  }
  
}