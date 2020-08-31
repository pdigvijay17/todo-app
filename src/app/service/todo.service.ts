import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from "../Model/todo";
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[];
  constructor() {
    this.todos = [
      {
        id: "111",
        title: "Learn Coding",
        isComplete: true,
        date: new Date(),
      },
      {
        id: "112",
        title: "Learn programming",
        isComplete: true,
        date: new Date(),
      },
      {
        id: "113",
        title: "Learn Science",
        isComplete: false,
        date: new Date(),
      }
    ];
  }

  getTodo = () => {
    return of(this.todos)
  };

  addTodos =  (todo:Todo) => {
    this.todos.push(todo);
  };

  changeStatus(updatehonetodo : Todo) {
    this.todos.map(currentTodo => {
      if (currentTodo.id === updatehonetodo.id){
        updatehonetodo.isComplete =! updatehonetodo.isComplete; 
      }
    });
  };
  deleteTodo (todo : Todo){

    var getTodoId = this.todos.findIndex(x => x.id === todo.id)
    this.todos.splice(getTodoId,1);
    }
}
