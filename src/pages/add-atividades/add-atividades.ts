import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';

/**
 * Generated class for the AddAtividadesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-atividades',
  templateUrl: 'add-atividades.html',
})
export class AddAtividadesPage {
  id_aluno:string;
  id_disciplina:string;
  atividade = {
    'titulo' : '',
    'descricao' : '',
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbService: FirebaseServiceProvider) {
  }

  ionViewDidLoad() {
    var id_disciplina = this.navParams.get('id_disciplina');
    var id_aluno = this.navParams.get('id_aluno');
    this.id_disciplina = id_disciplina;
    this.id_aluno = id_aluno;
    
  }

  addAtv(atividade, id_aluno,id_disciplina){

   var atividades = {
    'titulo' : atividade.titulo,
    'descricao' : atividade.descricao,
    'id_aluno' : id_aluno,
    'id_disciplina' : id_disciplina,
    'idx_aluno_disciplina' : id_aluno + '_' + id_disciplina,
    'atividade_custom' : 1,
    'status_atividade' : 0,
    'idx_atvTitulo': id_aluno + '_' + id_disciplina + '_' + atividade.titulo + '_1'

   }
    this.dbService.save(atividades);
  }

}
