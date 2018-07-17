import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndexPage } from './index';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

@NgModule({
  declarations: [
    IndexPage,
  ],
  imports: [
    IonicPageModule.forChild(IndexPage),
  ],
})
export class IndexPageModule {
}
