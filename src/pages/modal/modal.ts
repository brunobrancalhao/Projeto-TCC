import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';
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
  key : any;
  atividade: any;
  descricaoantiga : any;
  descricao:string;

  constructor(public dbService: FirebaseServiceProvider, private toast : ToastController, public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {

    this.atividade = navParams.get('atividade');
    this.key = navParams.get('key');
    this.descricaoantiga = navParams.get('desc');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  updateDesc(descricao:string){
    this.dbService.updateDesc(this.key,this.descricao);
    this.toast.create({ message: 'Descrição alterada com Sucesso !', duration: 2000 }).present();
    setTimeout(() => 
    {
      let data = { 'descricao': this.descricao, 'key' :  this.key};
      this.viewCtrl.dismiss(data);
    },2000);
  }
  
}
