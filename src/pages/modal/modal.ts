import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  teste;
  atividade: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {

    this.atividade = this.navParams.get('atividade');
    console.log(this.atividade);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  
}
