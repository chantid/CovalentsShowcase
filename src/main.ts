import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { MdIconRegistry } from '@angular2-material/icon';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { AuthGuard } from './app/auth.guard';
import { SessionService, AuthService } from './services/index';


if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  MdIconRegistry,
  HTTP_PROVIDERS,
  APP_ROUTER_PROVIDERS,
  AuthGuard,
  SessionService
]);
