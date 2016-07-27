import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES} from '@angular/router';
import { AuthService, SessionService} from '../services/index';

import { MdIcon } from '@angular2-material/icon';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

import { TD_LAYOUT_DIRECTIVES } from '@covalent/core';

@Component({
  moduleId: module.id,
  selector: 'qs-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
     MdIcon,
    MD_LIST_DIRECTIVES,
    TD_LAYOUT_DIRECTIVES
  ],
  providers:[AuthService],
})
export class AppComponent {


  greetMessage: string

  constructor(private router: Router, private session: SessionService) {
    this.greetMessage = 'Welcome '+session.getUsername();
  }

	  routes: Object[] = [{
      title: 'Home',
      route: '/',
      icon: 'home',
    }, {
      title: 'Covalent Componants',
      route: '/trials',
      icon: 'picture_in_picture',
    }, {
      title: 'ToDo App',
      route: '/demo',
      icon: 'event_note',
    }
  ];

  
  logout(): void {
    this.session.resetSession()
    this.router.navigate(['/login']);
  }
}
