import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TwdServiceProvider } from '../providers/twd-service/twd-service';
import { IndexPage } from '../pages/index/index';
import { AtividadesPage } from '../pages/atividades/atividades';
import { ModalPage } from '../pages/modal/modal';
import { MateriasProvider } from '../providers/materias/materias';

import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IndexPage,
    AtividadesPage,
    ModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IndexPage,
    AtividadesPage,
    ModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TwdServiceProvider,
    MateriasProvider
  ]
})
export class AppModule {}
