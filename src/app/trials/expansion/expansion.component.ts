import { Component, ViewContainerRef } from '@angular/core';
import {TimerWrapper} from '@angular/core/src/facade/async';

import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdIcon } from '@angular2-material/icon';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

import { TD_LAYOUT_DIRECTIVES } from '@covalent/core';
import { TdExpansionPanelComponent } from '@covalent/core';

import { TdHighlightComponent } from '@covalent/highlight';


@Component({
  moduleId: module.id,
  selector: 'qs-expansion',
  templateUrl: 'expansion.component.html',
  styleUrls: ['expansion.component.css'],
  directives: [
    MD_LIST_DIRECTIVES,
    ROUTER_DIRECTIVES,
    MdIcon,
    TD_LAYOUT_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_TABS_DIRECTIVES,
    TdExpansionPanelComponent,
    TdHighlightComponent
  ],
})


export class ExpansionComponent {

  expand: boolean = false;
  disabled: boolean = false;
  expandedEvent(): void {
    this.expand = true
  }
  collapsedEvent(): void {
    this.expand = false
  }

}
