import { RouterConfig } from '@angular/router';
import { DemoComponent } from './demo.component';
import { TodoComponent }  from './todo/todo.component';
import { GroceryTodoComponent }  from './gtodo/gtodo.component';
import { AuthGuard} from '../auth.guard';


export const demoRoutes: RouterConfig = [{
  component: DemoComponent,
  path: 'demo', canActivate: [AuthGuard],
  children: [{
      component: TodoComponent,
      path: '', canActivate: [AuthGuard]
    }, 
    {
      component: GroceryTodoComponent,
      path: 'grocery', canActivate: [AuthGuard]
    }
  ],
}];
