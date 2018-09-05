import { AngularFireDatabase } from 'angularfire2/database';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import * as jquery from 'jquery'




import {AngularFireModule, FirebaseAppConfig} from 'angularfire2';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TwdServiceProvider } from '../providers/twd-service/twd-service';
import { IndexPage } from '../pages/index/index';
import { AtividadesPage } from '../pages/atividades/atividades';
import { AddAtividadesPage } from '../pages/add-atividades/add-atividades';
import { ModalPage } from '../pages/modal/modal';
import { MateriasProvider } from '../providers/materias/materias';

import {HttpModule} from '@angular/http';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';
import { AngularFireDatabaseModule } from 'angularfire2/database';

const firebaseAppConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyDj8aq6WFRjMLpQfwNlhoY9vFq818wpJYU",
  authDomain: "kanbam-tasks.firebaseapp.com",
  databaseURL: "https://kanbam-tasks.firebaseio.com",
  projectId: "kanbam-tasks",
  storageBucket: "kanbam-tasks.appspot.com",
  messagingSenderId: "69213667198"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IndexPage,
    AtividadesPage,
    ModalPage,
    AddAtividadesPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(firebaseAppConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IndexPage,
    AtividadesPage,
    ModalPage,
    AddAtividadesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TwdServiceProvider,
    MateriasProvider,
    FirebaseServiceProvider
  ]
})
export class AppModule {}
