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

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
    var testes = [
      {
        oi: 'Gollum'
      },
      {
        oi: 'Frodo'
      },
      {
        oi: 'Samwise Gamgee'
      }
    ];
    this.teste = testes[this.navParams.get('teste')];
    console.log(this.teste);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  
}
