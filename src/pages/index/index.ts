import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AtividadesPage} from '../atividades/atividades'
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
  }
  irParaAtividades(){
  	this.navCtrl.push(AtividadesPage);
  }
  sair(){
    this.navCtrl.push(HomePage);
  }
}
