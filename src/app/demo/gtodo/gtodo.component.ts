import { Component } from '@angular/core';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { Router, ROUTER_DIRECTIVES} from '@angular/router';
import { MdIcon } from '@angular2-material/icon';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { AuthService, SessionService} from '../../../services/index';
import { TD_LAYOUT_DIRECTIVES, TD_LAYOUT_PROVIDERS } from '@covalent/core';
import { TdExpansionPanelComponent } from '@covalent/core';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { TdHighlightComponent } from '@covalent/highlight';

@Component({
  moduleId: module.id,
  selector: 'qs-todo',
  templateUrl: 'todo.component.html',
  styleUrls: ['todo.component.css'],
  directives: [
    MD_LIST_DIRECTIVES,
    ROUTER_DIRECTIVES,
    MdIcon,
    TD_LAYOUT_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    TdExpansionPanelComponent
  ],
  providers:[TD_LAYOUT_PROVIDERS]
})



export class GroceryTodoComponent {

  greetMessage: string

  constructor(private router: Router, private session: SessionService) {
    this.greetMessage = 'Welcome '+session.getUsername();
    this.todos = [
        new TodoModel(false, 'Get Milk', 'Get 1 ltr milk', '2016-08-01', false), 
        new TodoModel(false, 'Pay Bill', 'Pay electricity bill', '2016-08-02', false),
        new TodoModel(false, 'Car service', 'Appointment for car service', '2016-08-03', false)
      ]

    
  }

  todos: TodoModel[];

   routes: Object[] = [{
      title: 'Home',
      route: '/',
      icon: 'home',
    }, {
      title: 'Free Trials and POCs',
      route: '/trials',
      icon: 'cloud',
    }, {
      title: 'App Demo',
      route: '/loader',
      icon: 'event_note',
    }
  ];

  isDueToday(item:any){
    return new Date(item.dueDate).getDate() === new Date().getDate();
  }

  isOverdue(item:any){
    return new Date(item.dueDate).getDate() < new Date().getDate();
  }
  isDueLater(item:any){
    return new Date(item.dueDate).getDate() > new Date().getDate();
  }

  addNewTodo(){
    console.log('adding todo')
    this.todos.push(new TodoModel(false, 'Name', 'description', new Date().getDate().toString(), true)) 
  }
  

  logout(): void {
    this.session.resetSession()
    this.router.navigate(['/login']);
  }

}



export class TodoModel {
    isDone: boolean = false;
    name: string;
    description: string;
    dueDate: string;
    isNew: boolean;
   
  constructor(isDone: boolean, name: string, description: string, dueDate: string, isNew:boolean) {
    this.isDone = isDone;
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.isNew = isNew
  }
}
