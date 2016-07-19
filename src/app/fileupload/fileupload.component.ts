import { Component, ViewContainerRef } from '@angular/core';
import {TimerWrapper} from '@angular/core/src/facade/async';

import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdIcon } from '@angular2-material/icon';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

import { TD_LAYOUT_DIRECTIVES } from '@covalent/core';
import { TdFileUploadComponent, TdFileDropDirective } from '@covalent/file-upload';
import { TdHighlightComponent } from '@covalent/highlight';


@Component({
  moduleId: module.id,
  selector: 'qs-loader',
  templateUrl: 'fileupload.component.html',
  styleUrls: ['fileupload.component.css'],
  directives: [
    MD_LIST_DIRECTIVES,
    ROUTER_DIRECTIVES,
    MdIcon,
    TD_LAYOUT_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_TABS_DIRECTIVES,
    TdFileUploadComponent,
    TdFileDropDirective,
    TdHighlightComponent
  ],
})


export class FileUploadComponent {

  disabled: boolean = false;
  fileName: string  = ''
  fileNames: string  = ''
  fileNames2: string  = ''
  disabledDrop: boolean = false


  uploadEvent(files: FileList | File): void {
    if (files instanceof FileList) {
      let names: string[] = [];
      for (var i = files.length - 1; i >= 0; i--) {
        names.push(files.item(i).name)
      }
      this.fileNames = names.join(',');
    } else {
      this.fileName = files.name;
    }
  };

  uploadEvent2(files: FileList | File): void {
    this.fileNames2 = ''
    if (files instanceof FileList) {
      let names: string[] = [];
      for (let i: number = 0; i < files.length; i++) {
        names.push(files.item(i).name);
      }
      this.fileNames2 = names.join(',');
    } else {
      this.fileNames2 = files.name;
    }

  }

}
