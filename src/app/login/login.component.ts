import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdIcon } from '@angular2-material/icon';
import { MdToolbar } from '@angular2-material/toolbar';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MdButton } from '@angular2-material/button';
import { AuthService } from'../../services/index';


@Component({
  moduleId: module.id,
  selector: 'qs-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    MdToolbar,
    MdIcon,
    MdButton,
  ],
})
export class LoginComponent {

  username: string;
  password: string;

  isInvalid = false

  constructor(private router: Router, private authService: AuthService) {}

  login(): void {
    if(this.authService.login(this.username, this.password)){
      this.router.navigate(['/']);
    }
    else{
      this.isInvalid = true;
    }
    }
  }
