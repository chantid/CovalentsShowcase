// Imports
import {Injectable, EventEmitter} from '@angular/core';
import {Cookie} from 'ng2-cookies/ng2-cookies';


@Injectable()
export class SessionService {
  loggedIn: boolean = false;


  setContext(userName: string) {
		this.loggedIn = true;
    Cookie.set('userName', userName , 0);
    Cookie.set('isLoggedIn', 'true', 0);
  }


  resetSession() {
		this.loggedIn = false;
    Cookie.delete('userName');
    Cookie.delete('isLoggedIn');
  }

  getUsername() {
      return Cookie.get('userName')
  }

  isLoggedIn() {
    this.loggedIn = (Cookie.get('isLoggedIn') === 'true') ? true : false;
    return this.loggedIn;
  }
}

 