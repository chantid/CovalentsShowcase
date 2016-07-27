import { Injectable }             from '@angular/core';
import { CanActivate,
         Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot }    from '@angular/router';
import { SessionService }         from '../services/index';



@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private session: SessionService, private router: Router) {}

  canActivate( next:  ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  	if (!this.session.isLoggedIn() && state.url === '/login') {
    	return true;
    } else if (this.session.isLoggedIn() && state.url !== '/login') {
    	return true;
    } else if (this.session.isLoggedIn() && state.url === '/login') {
    	this.router.navigate(['']);
    	return false;
    } else {
    	this.router.navigate(['/login']);
	  	return false;
    }
  }
}