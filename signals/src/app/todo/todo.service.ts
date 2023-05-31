import { Injectable, WritableSignal, signal } from '@angular/core';

export interface Todo {
  id: number;
  name: string;
}
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoList: WritableSignal<Todo[]> = signal<Todo[]>([
    { id: Math.random(), name: 'Learn Signals' },
    { id: Math.random(), name: 'Realise signals are awsome' },
    { id: Math.random(), name: 'World Dominance' },
  ]);

  completedTodos: WritableSignal<number> = signal(0);

  constructor() {}

  addTodo(newTodo: Todo) {
    this.todoList.mutate((value) => {
      value.push(newTodo);
    });
  }

  deleteTodo(id: number) {
    this.todoList.update((value: Todo[]) =>
      value.filter((todo) => todo.id !== id)
    );
  }

  completeTodo(id: number) {
    this.completedTodos.update((value) => value + 1);
    this.deleteTodo(id);
  }
}
