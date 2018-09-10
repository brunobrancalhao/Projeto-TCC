import { Injectable } from '@angular/core';
import {Storage} from "@ionic/storage";

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  isLoggedIn: Boolean;
  user: any;

  constructor(public storage: Storage) {
    this.storage.get('user').then((user) => {
      this.user = user;
      this.isLoggedIn = true;
    });
  }

login(user) {
  
  return this.storage.set('user', user).then(() => {
      this.isLoggedIn = true;
      this.user = user;
  });

}

logout() {

  this.storage.remove('user').then(() => {
      this.isLoggedIn = false;
      this.user = null;
  });

}

isAuthenticated() {
  return this.isLoggedIn;
}

getUser() {
  return this.user;
}

}
