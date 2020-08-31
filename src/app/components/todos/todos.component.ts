import { Component, OnInit } from '@angular/core';
import { TodoService } from "../../service/todo.service"
import { Todo } from "../../Model/Todo"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {


  faTrash = faTrash;
  todos: Todo[];
  constructor(private _todoService: TodoService) { }
  ngOnInit(): void {

    this._todoService.getTodo().subscribe(todo => {
      this.todos = todo;
    })
  }

  changeTodoStatus (todo : Todo){
    this._todoService.changeStatus(todo);
  }

  deleteTodo(todo: Todo){
    this._todoService.deleteTodo(todo);
  }


}
