import { Component, OnInit, Signal } from '@angular/core';
import { Todo, TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  completedTodos: Signal<number>;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.completedTodos = this.todoService.completedTodos;
  }
}
