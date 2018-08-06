import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, InfiniteScroll } from 'ionic-angular';
import {AtividadesPage} from '../atividades/atividades'
import { HomePage } from '../home/home';
import { ViewChild } from '@angular/core';

import { MateriasProvider } from './../../providers/materias/materias';

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
  materias: any[];
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;
  constructor(public navCtrl: NavController, public navParams: NavParams, private toast : ToastController, private materiasProvider : MateriasProvider) {

  }

  ionViewDidEnter(id_aluno) {
    var id_aluno = this.navParams.get('id_aluno');
    this.materias = [];
    this.getMaterias(id_aluno);
  }

  getMaterias(id_aluno:string){
  	this.materiasProvider.buscaMaterias(id_aluno).then((result: any) => {
      console.log(result);
      for (var i = 0; i < result.length; i++) {
        var materia = result[i];
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
    console.log("aq");
    this.navCtrl.push(HomePage);
  }
}
