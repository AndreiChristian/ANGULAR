import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  decrement,
  increment,
  reset,
  toggleVisibility,
} from '../state/counter.actions';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css'],
})
export class CounterButtonsComponent {
  constructor(private store: Store<{ counter: CounterState }>) {}

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  toggleVisibility() {
    this.store.dispatch(toggleVisibility());
  }
}
