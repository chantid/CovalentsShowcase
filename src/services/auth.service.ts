// Imports
import {Injectable} from '@angular/core';
import {SessionService} from './index';


@Injectable()
export class AuthService {

constructor(public sessionManager: SessionService) {
}

login(username: string, password: string) {

	if(username == password){
        this.sessionManager.setContext(username);
    	return true
    }
    else{
    	return false
    }
  };
}