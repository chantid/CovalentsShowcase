import { provideRouter, RouterConfig, Route } from '@angular/router';

import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { HighlightComponent } from './highlight/highlight.component';
import { LoaderComponent } from './loader/loader.component';
import { FileUploadComponent } from './fileupload/fileupload.component';
import { StepperComponent } from './stepper/stepper.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard} from './auth.guard';



export const routes: RouterConfig = [
  {path: 'login', component: LoginComponent},
  {path: '', component: MainComponent, children: [{
      component: HomeComponent,
      path: '',
      canActivate: [AuthGuard]
    },
    {path: 'highlight', component: HighlightComponent, canActivate: [AuthGuard]},
    {path: 'loader', component: LoaderComponent, canActivate: [AuthGuard]},
    {path: 'fileupload', component: FileUploadComponent, canActivate: [AuthGuard]},
    {path: 'stepper', component: StepperComponent, canActivate: [AuthGuard]},
    {path: 'expansion', component: ExpansionComponent, canActivate: [AuthGuard]},
  ]},
];

export const APP_ROUTER_PROVIDERS: Route[] = [
  provideRouter(routes),
];
