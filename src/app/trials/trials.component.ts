import { Component } from '@angular/core';

import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdIcon } from '@angular2-material/icon';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { AuthService, SessionService} from '../../services/index';
import { TD_LAYOUT_DIRECTIVES, TD_LAYOUT_PROVIDERS } from '@covalent/core';

import { TdHighlightComponent } from '@covalent/highlight';

@Component({
  moduleId: module.id,
  selector: 'qs-trials',
  templateUrl: 'trials.component.html',
  styleUrls: ['trials.component.css'],
  directives: [
    MD_LIST_DIRECTIVES,
    ROUTER_DIRECTIVES,
    MdIcon,
    TD_LAYOUT_DIRECTIVES
  ],
  providers:[TD_LAYOUT_PROVIDERS]
})

export class TrialsComponent {

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
