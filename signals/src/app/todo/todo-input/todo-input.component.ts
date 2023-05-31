import { Component } from '@angular/core';
import { Todo, TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css'],
})
export class TodoInputComponent {
  inputValue: string;

  constructor(private todoService: TodoService) {}

  createNewTodo() {
    const newTodo: Todo = {
      id: Math.random(),
      name: this.inputValue,
    };
    this.todoService.addTodo(newTodo);
  }
}
