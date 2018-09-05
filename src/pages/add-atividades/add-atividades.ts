import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController,NavParams, ToastController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import {AtividadesPage} from '../atividades/atividades'

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
  descricao : string;
  titulo : string;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, private toast : ToastController, public navParams: NavParams, public dbService: FirebaseServiceProvider) {
    
    this.id_aluno = navParams.get('id_aluno');
    this.id_disciplina = navParams.get('id_disciplina');
    this.titulo = navParams.get('titulo');
    this.descricao = navParams.get('descricao');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  addAtv(){
    
   var atividades = {
    'titulo' : this.titulo,
    'descricao' : this.descricao,
    'id_aluno' : this.id_aluno,
    'id_disciplina' : this.id_disciplina,
    'idx_aluno_disciplina' : this.id_aluno + '_' + this.id_disciplina,
    'atividade_custom' : 1,
    'status_atividade' : 0,
    'idx_atvTitulo': this.id_aluno + '_' + this.id_disciplina + '_' + this.titulo + '_1'

   }
    this.dbService.save(atividades);
    this.toast.create({ message: 'Atividade Cadastrada com Sucesso !', duration: 2000 }).present();
    setTimeout(() => 
    {
      this.viewCtrl.dismiss(atividades);
    },2000);
  }

}
