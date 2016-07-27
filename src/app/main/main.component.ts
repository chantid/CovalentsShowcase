import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { MdIcon } from '@angular2-material/icon';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

import { TD_LAYOUT_DIRECTIVES } from '@covalent/core';

import { SessionService } from '../../services/index'

@Component({
  moduleId: module.id,
  selector: 'qs-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MdIcon,
    MD_LIST_DIRECTIVES,
    TD_LAYOUT_DIRECTIVES,
  ],
})
export class MainComponent {

  greetMessage: string

  constructor(private router: Router, private session: SessionService) {
    this.greetMessage = 'Welcome '+session.getUsername();
  }

  routes: Object[] = [{
      title: 'Home',
      route: '/',
      icon: 'home',
    }, {
      title: 'Free Trials and POCs',
      route: '/trials',
      icon: 'cloud',
    }, {
      title: 'App Demo',
      route: '/loader',
      icon: 'event_note',
    }
  ];

  
  logout(): void {
    this.session.resetSession()
    this.router.navigate(['/login']);
  }
}
