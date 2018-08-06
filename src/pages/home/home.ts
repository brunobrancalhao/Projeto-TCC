import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import {IndexPage} from '../index/index'
import { MateriasProvider } from './../../providers/materias/materias';
import {Md5} from "md5-typescript";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username:string;
  password:string;
  constructor(public navCtrl: NavController, private toast : ToastController, private materiasProvider : MateriasProvider) {

  }

  login(id_aluno:string,password:string) {
    this.materiasProvider.login(this.username,this.password).then((result: any) => {
      if(result){
        if(result[0]['hash_senha'] == Md5.init(this.password)){
          this.navCtrl.push(IndexPage,{
            id_aluno: this.username
          });
        }else{
          this.toast.create({ message: 'Senha invalida', duration: 3000 }).present();
        }
      }else{
        this.toast.create({ message: 'Aluno não encontrado', duration: 3000 }).present();
      }
    })
    .catch((error: any) => {
      this.toast.create({ message: 'Aluno não encontrado', duration: 3000 }).present();
    });   
  }

}
