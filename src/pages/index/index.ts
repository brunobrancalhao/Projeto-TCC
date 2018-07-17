import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {AtividadesPage} from '../atividades/atividades'
import { HomePage } from '../home/home';

import { MateriasProvider } from './../../providers/materias/materias';

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
  materias: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private toast : ToastController, private materiasProvider : MateriasProvider) {
  }

  ionViewDidEnter() {
    this.materias = [];
    this.getMaterias();
  }

  getMaterias(){
  	this.materiasProvider.buscaMaterias().then((result: any) => {
      for (var i = 0; i < result.data.length; i++) {
        var materia = result.data[i];
        console.log(materia);
        this.materias.push(materia);
      }
  	})
  	.catch((error: any) => {
  		this.toast.create({message: 'Erro nenhuma materia encontrada' + error.erro, position : 'botton', duration : 30000});
  	})
  }
  irParaAtividades(){
  	this.navCtrl.push(AtividadesPage);
  }
  sair(){
    this.navCtrl.push(HomePage);
  }
}
