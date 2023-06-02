import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { customIncrement } from '../state/counter.actions';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css'],
})
export class CustomCounterInputComponent {
  customIncrement = 0;

  constructor(private store: Store<{ counter: CounterState }>) {}

  increment() {
    this.customIncrement = this.customIncrement + 1;
  }

  decrement() {
    this.customIncrement--;
  }

  addCustomIncrement() {
    const newIncrement = { value: this.customIncrement };
    this.store.dispatch(customIncrement(newIncrement));
  }
}
