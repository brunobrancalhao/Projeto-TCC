import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, InfiniteScroll } from 'ionic-angular';
import {AtividadesPage} from '../atividades/atividades'
import { HomePage } from '../home/home';
import { ViewChild } from '@angular/core'
import { materias } from '../../models/materias/materias.interface';
import { AngularFireList } from 'angularfire2/database';



import { MateriasProvider } from './../../providers/materias/materias';

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
  materias: any[];
  id_disciplina:string;  
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;
  constructor(public navCtrl: NavController, public navParams: NavParams, private toast : ToastController, private materiasProvider : MateriasProvider) {

  }

  ionViewDidEnter(id_aluno) {
    var id_aluno = this.navParams.get('id_aluno');
    this.materias = [];
    this.getMaterias(id_aluno);
  }

  getMaterias(id_aluno:string){
    var materiasDB = false;//this.getMateriasDB(id_aluno);
    if(materiasDB){

    } else {
      this.materiasProvider.buscaMaterias(id_aluno).then((result: any) => {
        for (var i = 0; i < result.length; i++) {
          var materia = result[i];
          
          materia.disciplina = this.capitalize(materia.nome_disciplina);
          if(materia.disciplina != '* Comunicados e materiais para todos os ALUNOS de Computação'){
            materia.nome_disciplina_correta = materia.disciplina;
          }
          this.materias.push(materia);
        }
      })
      .catch((error: any) => {
        this.toast.create({message: 'Erro nenhuma materia encontrada' + error.erro, position : 'botton', duration : 30000});
      })
    }
  }

  capitalize(phrase) {
    phrase = phrase.replace(/ *\[[^)]*\] */g, "");
    return phrase;
  }
  
  irParaAtividades(id_disciplina:string){
    this.navCtrl.push(AtividadesPage,{
      id_disciplina: id_disciplina
    });
  }
  sair(){
    console.log("aq");
    this.navCtrl.push(HomePage);
  }
}
