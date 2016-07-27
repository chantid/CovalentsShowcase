import { provideRouter, RouterConfig, Route } from '@angular/router';

import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { StepperComponent } from './stepper/stepper.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard} from './auth.guard';
import { DemoComponent } from './demo/demo.component';

import { trialsRoutes } from './trials/trials.routes';

export const routes: RouterConfig = [
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent, canActivate: [AuthGuard]
    },
    {path: 'demo', component: DemoComponent, canActivate: [AuthGuard]},
  ...trialsRoutes
];

export const APP_ROUTER_PROVIDERS: Route[] = [
  provideRouter(routes),
];
