import { Component, OnInit } from '@angular/core';

import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdIcon } from '@angular2-material/icon';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

import { TD_LAYOUT_DIRECTIVES, TdExpansionPanelComponent } from '@covalent/core';
import { TdDigitsPipe, TdBytesPipe, TdTimeAgoPipe } from '@covalent/core';


@Component({
  moduleId: module.id,
  selector: 'qs-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [
    MD_LIST_DIRECTIVES,
    ROUTER_DIRECTIVES,
    MdIcon,
    TD_LAYOUT_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    TdExpansionPanelComponent,
  ],
  pipes: [ TdDigitsPipe, TdBytesPipe, TdTimeAgoPipe ],
})
export class HomeComponent implements OnInit {
  items: Object[];
  resources: Object[];
  disabled: boolean = false;

  ngOnInit(): void {
    this.items = [{
        title: 'Syntax Highlighting',
        route: '/highlight',
        icon: 'event_note',
        color: 'pink-A200',
        description: 'Highlighting your code snippets',
      },
      {
        title: 'Loaders',
        route: '/loader',
        icon: 'autorenew',
        color: 'blue-A700',
        description: 'Circular or linear progress loader',
      },
      {
        title: 'File Upload',
        route: '/fileupload',
        icon: 'attach_file',
        color: 'teal-700',
        description: 'Upload input button',
      },
      {
        title: 'Stepper',
        route: '/stepper',
        icon: 'format_line_spacing',
        color: 'green-700',
        description: 'A sequence of logical & numbered steps',
      },
      {
        title: 'Expansion',
        route: '/expansion',
        icon: 'expand_more',
        color: 'purple-700',
        description: 'Expand & collapse containers',
      }

    ];
    this.resources = [{
        title: 'Covalent Documentation',
        link: 'https://teradata.github.io/covalent/',
        icon: 'chrome_reader_mode',
        color: 'orange-600',
        description: 'Detailed docs to use this quickstart app',
      }, {
        title: 'Covalent Github Repo',
        link: 'https://github.com/Teradata/covalent',
        icon: 'code',
        color: 'orange-700',
        description: 'Submit bugs, feature requests and view progress',
      },
    ];
  }
}
