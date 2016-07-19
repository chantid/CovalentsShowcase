import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { MdIcon } from '@angular2-material/icon';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

import { TD_LAYOUT_DIRECTIVES } from '@covalent/core';

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

  routes: Object[] = [{
      title: 'Home',
      route: '/',
      icon: 'home',
    }, {
      title: 'Syntax Highlighting',
      route: '/highlight',
      icon: 'event_note',
    }, {
      title: 'Loaders',
      route: '/loader',
      icon: 'autorenew',
    }, {
      title: 'File Upload',
      route: '/fileupload',
      icon: 'attach_file',
    },{
      title: 'Stepper',
      route: '/stepper',
      icon: 'format_line_spacing',
    },{
      title: 'Expansion',
      route: '/expansion',
      icon: 'expand_more',
    },
  ];

  constructor(private router: Router) {}

  logout(): void {
    this.router.navigate(['/login']);
  }
}
