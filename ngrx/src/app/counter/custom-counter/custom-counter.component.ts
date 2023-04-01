import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../store/counter.state';
import { customIncrement } from '../store/counter.actions';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css'],
})
export class CustomCounterComponent {
  value: number;

  constructor(private store: Store<{ counter: CounterState }>) {}

  onAdd() {
    this.store.dispatch(
      customIncrement({
        value: +this.value,
      })
    );
  }
}
