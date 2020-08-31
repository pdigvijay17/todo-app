import { Component, OnInit } from '@angular/core';
import { Todo } from './../../Model/Todo';
import { TodoService } from './../../service/todo.service'
import { v4 as uuid } from 'uuid';
@Component({
  selector: 'app-todo-forms',
  templateUrl: './todo-forms.component.html',
  styleUrls: ['./todo-forms.component.css']
})
export class TodoFormsComponent implements OnInit {

  title: string;
  constructor( private todoService : TodoService) { }

  ngOnInit(): void {
  }

  handleAdd(){ 
    const newTodo:Todo = {
      id: uuid(),
      title: this.title,
      isComplete: false,
      date: new Date()
    }
   this.todoService.addTodos(newTodo);
   this.title = ""; 

  }
}
