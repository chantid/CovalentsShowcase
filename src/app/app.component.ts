import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';
import { AuthService, SessionService} from '../services/index';

@Component({
  moduleId: module.id,
  selector: 'qs-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
  ],
  providers:[AuthService],
})
export class AppComponent {

}
