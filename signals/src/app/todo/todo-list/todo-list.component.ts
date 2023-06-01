import { Component, OnInit, Signal } from '@angular/core';
import { Todo, TodoService } from '../todo.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  todoList: Signal<Todo[]>;

  ngOnInit(): void {
    this.todoList = this.todoService.todoList;
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
  }

  completeTodo(id: number) {
    this.todoService.completeTodo(id);
  }

  toggleImportant(id: number) {
    this.todoService.toggleImportant(id);
  }
}
