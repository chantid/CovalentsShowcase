import { provideRouter, RouterConfig, Route } from '@angular/router';

import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { HighlightComponent } from './highlight/highlight.component';
import { LoaderComponent } from './loader/loader.component';
import { FileUploadComponent } from './fileupload/fileupload.component';
import { StepperComponent } from './stepper/stepper.component';
import { ExpansionComponent } from './expansion/expansion.component';


export const routes: RouterConfig = [
  {path: '', component: MainComponent, children: [{
      component: HomeComponent,
      path: '',
    },
    {path: 'highlight', component: HighlightComponent},
    {path: 'loader', component: LoaderComponent},
    {path: 'fileupload', component: FileUploadComponent},
    {path: 'stepper', component: StepperComponent},
    {path: 'expansion', component: ExpansionComponent},
  ]},
];

export const APP_ROUTER_PROVIDERS: Route[] = [
  provideRouter(routes),
];
