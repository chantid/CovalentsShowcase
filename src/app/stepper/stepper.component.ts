import { Component, ViewContainerRef } from '@angular/core';
import {TimerWrapper} from '@angular/core/src/facade/async';

import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdIcon } from '@angular2-material/icon';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

import { TD_LAYOUT_DIRECTIVES } from '@covalent/core';
import { TD_STEPS_DIRECTIVES, IStepChangeEvent, StepState } from '@covalent/core';
import { TdHighlightComponent } from '@covalent/highlight';

@Component({
  moduleId: module.id,
  selector: 'qs-stapper',
  templateUrl: 'stepper.component.html',
  styleUrls: ['stepper.component.css'],
  directives: [
    MD_LIST_DIRECTIVES,
    ROUTER_DIRECTIVES,
    MdIcon,
    TD_LAYOUT_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_TABS_DIRECTIVES,
    TD_STEPS_DIRECTIVES,
    TdHighlightComponent
  ],
})


export class StepperComponent {

  active: boolean = false;
  disabled: boolean = false;
  active2: boolean = false;
  disabled2: boolean = false;
  state: StepState = StepState.Complete;
  state2: StepState = StepState.Required; 

  change(event: IStepChangeEvent): void {
    console.log('Change event');
  };

  activeEvent(): void {
    this.active = true
  };
  deactiveEvent(): void {
    this.active = false
  };

  activeEvent2(): void {
    this.active2 = true
  };
  deactiveEvent2(): void {
    this.active2 = false
  };

  toggle_done(event) {
    if (this.state == StepState.Complete){
      this.state = StepState.None
    }
    else if (this.state == StepState.None){
      this.state = StepState.Complete
    }
  };
  toggle_require(event) {
    console.log('req called'+(this.state2 == StepState.Required));
    if (this.state2 == StepState.Required){
      this.state2 = StepState.None
    }
    else if (this.state2 == StepState.None){
      this.state2 = StepState.Required
    }
  };
}
