import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {IndexPage} from '../index/index'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  irParaIndex(){
  	this.navCtrl.push(IndexPage);
  }
}
