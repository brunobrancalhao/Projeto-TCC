import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { NgSwitch } from '@angular/common';
import { ModalController, Platform, ViewController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';

import { MateriasProvider } from './../../providers/materias/materias';

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
  atividades : any[];
  constructor(public navCtrl: NavController, private toast : ToastController ,public navParams: NavParams, public modalCtrl: ModalController, private materiasProvider : MateriasProvider) {
  }

  ionViewDidLoad() {
    var id_disciplina = this.navParams.get('id_disciplina');
    this.atividades = [];
    this.getAtividades(id_disciplina);
    
  }

  getAtividades(id_disciplina:string){
  	this.materiasProvider.buscaAtividades(id_disciplina).then((result: any) => {
      for (var i = 0; i < result.data.length; i++) {
        var atividade = result.data[i];
        this.atividades.push(atividade);
      }
  	})
  	.catch((error: any) => {
  		this.toast.create({message: 'Erro nenhuma atividade encontrada' + error.erro, position : 'botton', duration : 30000});
  	})
  }
  
  openModal(atividade) {
    let profileModal = this.modalCtrl.create(ModalPage, atividade);
    profileModal.present();
  }
  
}