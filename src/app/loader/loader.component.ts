import { Component, ViewContainerRef } from '@angular/core';
import {TimerWrapper} from '@angular/core/src/facade/async';

import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdIcon } from '@angular2-material/icon';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

import { TD_LAYOUT_DIRECTIVES } from '@covalent/core';

import { TdLoadingDirective, TdLoadingService, LoadingType, ILoadingOptions} from '@covalent/core';

import { ItemsService, UsersService } from '../../services';
import { TdHighlightComponent } from '@covalent/highlight';

@Component({
  moduleId: module.id,
  selector: 'qs-loader',
  templateUrl: 'loader.component.html',
  styleUrls: ['loader.component.css'],
  directives: [
    MD_LIST_DIRECTIVES,
    ROUTER_DIRECTIVES,
    MdIcon,
    TD_LAYOUT_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_TABS_DIRECTIVES,
    TdLoadingDirective,
    TdHighlightComponent
  ],
  providers: [ TdLoadingService ]
})


export class LoaderComponent {

  constructor(private _loadingService: TdLoadingService, viewContainerRef: ViewContainerRef) {
    let options: ILoadingOptions = {
      name: 'stringName',
      type: LoadingType.Circular,
    };
    this._loadingService.createOverlayComponent(options, viewContainerRef);

    let options2: ILoadingOptions = {
      name: 'stringName2',
      type: LoadingType.Linear,
    };
    this._loadingService.createOverlayComponent(options2, viewContainerRef);

  };

  start_liner_div(event) {
    this._loadingService.register('linearLoaderDiv');
  };

  stop_liner_div(event) {
    this._loadingService.resolve('linearLoaderDiv');
  };

  start_circular_div(event) {
    this._loadingService.register('circularLoaderDiv');
  };

  stop_circular_div(event) {
    this._loadingService.resolve('circularLoaderDiv');
  };

  start_circular_overlay(event) {
    this._loadingService.register('stringName');
    TimerWrapper.setTimeout(() => {  
      this._loadingService.resolve('stringName');
    }, 4000)
  };

  start_linear_overlay(event) {
    this._loadingService.register('stringName2');
    TimerWrapper.setTimeout(() => {  
      this._loadingService.resolve('stringName2');
    }, 4000)
  };


}
