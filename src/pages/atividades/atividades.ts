import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { NgSwitch } from '@angular/common';
import { ModalController, Platform, ViewController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
import {AddAtividadesPage} from '../add-atividades/add-atividades'
import * as $ from 'jquery';


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
  private atvBd;

  id : string;
  atividades : any[];
  atividadesbd : any[];
  id_aluno:string;
  id_disciplina:string;
  constructor(public dbService: FirebaseServiceProvider,public navCtrl: NavController, private toast : ToastController ,public navParams: NavParams, public modalCtrl: ModalController, private materiasProvider : MateriasProvider) {
    // console.log(this.atvBd);
  }

  ionViewDidLoad() {
    var id_disciplina = this.navParams.get('id_disciplina');
    var id_aluno = this.navParams.get('id_aluno');
    this.id_aluno = id_aluno;
    this.id_disciplina = id_disciplina;
    this.atividades = [];
    this.atividadesbd = [];
    this.getAtividades(id_disciplina, id_aluno);
    
  }

  async getAtividades(id_disciplina:string, id_aluno : string){
    var atvExist;
  	this.materiasProvider.buscaAtividades(id_disciplina).then(async (result: any) => {
       for (var i = 0; i < result.data.length; i++) {
        var atividade = result.data[i];
        await this.dbService.getAtividadescustom(id_aluno,id_disciplina,atividade.id_atividade).then((atvExistresult) => {
          atvExist = atvExistresult;
        });
        if(atvExist){
          var atividades = {
            'titulo' : atividade.titulo,
            'descricao' : atividade.descricao,
            'id_aluno' : id_aluno,
            'id_disciplina' : id_disciplina,
            'idx_aluno_disciplina' : id_aluno + '_' + id_disciplina,
            'atividade_custom' : 0,
            'status_atividade' : 0,
            'idx_atvTitulo' : id_aluno + '_' + id_disciplina + '_' + atividade.id_atividade + '_0' 
          }
          this.dbService.save(atividades);
        } 

      }
      await this.dbService.getAtividades(id_aluno,id_disciplina).then((atividadesbd2: any) => {
        this.atividadesbd = atividadesbd2;

      this.atividades.push(this.atividadesbd);
        
      });
  	})
  	.catch((error: any) => {
  		this.toast.create({message: 'Erro nenhuma atividade encontrada' + error.erro, position : 'botton', duration : 30000});
  	})
  }

  irParaAddAtividade(id_disciplina, id_aluno){
    console.log(id_disciplina,id_aluno);
    this.navCtrl.push(AddAtividadesPage,{
      id_disciplina: id_disciplina,
      id_aluno : id_aluno
    });
  }
  
  openModal(atividade,key,desc) {
    let atvModal = this.modalCtrl.create(ModalPage, { atividade : atividade.atividade,key : key.key, desc : desc.desc });
    atvModal.onDidDismiss(data => {
      this.atividadesbd.forEach((element,i) => {
        if(element.key == data.key){
          this.atividadesbd[i].descricao = data.descricao; 
        }
      });
    });
    atvModal.present();
  }

  moveAtvFazendo(key : string){
    this.dbService.moveAtv(key,1);
    this.atividadesbd.forEach((element,i) => {
      if(element.key == key){
        this.atividadesbd[i].status_atividade = 1; 
      }
    });
  }

  moveAtvAFazer(key : string){
    this.dbService.moveAtv(key,0);
    this.atividadesbd.forEach((element,i) => {
      if(element.key == key){
        this.atividadesbd[i].status_atividade = 0; 
      }
    });
  }

  moveAtvOk(key : string){
    this.dbService.moveAtv(key,2);
    this.atividadesbd.forEach((element,i) => {
      if(element.key == key){
        this.atividadesbd[i].status_atividade = 2; 
      }
    });
  }
  
}