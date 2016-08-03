import { Component } from '@angular/core';
import {TodoStore, Todo} from '../../services/store';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { Router, ROUTER_DIRECTIVES} from '@angular/router';
import { MdIcon } from '@angular2-material/icon';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { AuthService, SessionService} from '../../services/index';
import { TD_LAYOUT_DIRECTIVES, TD_LAYOUT_PROVIDERS } from '@covalent/core';

import { TdHighlightComponent } from '@covalent/highlight';

@Component({
  moduleId: module.id,
  selector: 'qs-demo',
  templateUrl: 'demo.component.html',
  styleUrls: ['demo.component.css'],
  directives: [
    MD_LIST_DIRECTIVES,
    ROUTER_DIRECTIVES,
    MdIcon,
    TD_LAYOUT_DIRECTIVES
  ],
  providers:[TD_LAYOUT_PROVIDERS, TodoStore]
})

export class DemoComponent {

  greetMessage: string

  constructor(private router: Router, private session: SessionService, todoStore: TodoStore) {
    this.greetMessage = 'Welcome '+session.getUsername();
    this.todoStore = todoStore;
  }

    routes: Object[] = [{
      title: 'Home',
      route: '/',
      icon: 'home',
    }, {
      title: 'Covalent Componants',
      route: '/trials',
      icon: 'picture_in_picture',
    }, {
      title: 'ToDo App',
      route: '/demo',
      icon: 'event_note',
    }
  ];


  todoStore: TodoStore;
  newTodoText = '';

  stopEditing(todo: Todo, editedTitle: string) {
    todo.title = editedTitle;
    todo.editing = false;
  }

  cancelEditingTodo(todo: Todo) {
    todo.editing = false;
  }

  updateEditingTodo(todo: Todo, editedTitle: string) {
    editedTitle = editedTitle.trim();
    todo.editing = false;

    if (editedTitle.length === 0) {
      return this.todoStore.remove(todo);
    }

    todo.title = editedTitle;
  }

  editTodo(todo: Todo) {
    todo.editing = true;
  }

  removeCompleted() {
    this.todoStore.removeCompleted();
  }

  getCompleted() {
    for(let index = 0; index < this.todoStore.todos.length; index++){
      if(this.todoStore.todos[index].completed){
        this.todoStore.todos[index].visible = true;
      }
      else{
        this.todoStore.todos[index].visible = false;
      }
    }
  }

  getActive() {
    for(let index = 0; index < this.todoStore.todos.length; index++){
      if(this.todoStore.todos[index].completed){
        this.todoStore.todos[index].visible = false;
      }
      else{
        this.todoStore.todos[index].visible = true;
      }
    }
  }

  getAll() {
    for(let index = 0; index < this.todoStore.todos.length; index++){
       this.todoStore.todos[index].visible = true;
    }
  }

  toggleCompletion(todo: Todo) {
    this.todoStore.toggleCompletion(todo);
  }

  remove(todo: Todo){
    this.todoStore.remove(todo);
  }

  addTodo() {
    if (this.newTodoText.trim().length) {
      this.todoStore.add(this.newTodoText);
      this.newTodoText = '';
    }
  }

  logout(): void {
    this.session.resetSession()
    this.router.navigate(['/login']);
  }

}
