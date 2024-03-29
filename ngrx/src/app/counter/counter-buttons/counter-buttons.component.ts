import { Component, EventEmitter, Output } from '@angular/core';
import { CounterService } from '../counter.service';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../store/counter.actions';
import { CounterState } from '../store/counter.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css'],
})
export class CounterButtonsComponent {
  constructor(private store: Store<{ counter: CounterState }>) {}

  onIncrement() {
    this.store.dispatch(increment());
  }

  onDecrement() {
    this.store.dispatch(decrement());
  }

  onReset() {
    this.store.dispatch(reset());
  }
}
