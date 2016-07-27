import { RouterConfig } from '@angular/router';
import { TrialsComponent } from './trials.component';
import { LoaderComponent }  from './loader/loader.component';
import { HighlightComponent } from './highlight/highlight.component';
import { FileUploadComponent } from './fileupload/fileupload.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { AuthGuard} from '../auth.guard';


export const trialsRoutes: RouterConfig = [{
  component: TrialsComponent,
  path: 'trials', canActivate: [AuthGuard],
  children: [{
      component: HighlightComponent,
      path: '', canActivate: [AuthGuard]

    }, 
    {
      component: LoaderComponent,
      path: 'loader', canActivate: [AuthGuard]
    }, {
      component: TrialsComponent,
      path: 'highlight', canActivate: [AuthGuard]
    }, { 
      component: FileUploadComponent,
      path: 'fileupload', canActivate: [AuthGuard]
    }, {
      component: ExpansionComponent,
      path: 'expansion', canActivate: [AuthGuard]
    }
  ],
}];
