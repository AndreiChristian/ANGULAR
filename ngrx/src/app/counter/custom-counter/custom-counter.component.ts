import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../store/counter.state';
import { changeText, customIncrement } from '../store/counter.actions';
import { getText } from '../store/counter.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css'],
})
export class CustomCounterComponent implements OnInit {
  value: number;
  text$: Observable<string>;

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {
    this.text$ = this.store.select(getText);
  }

  onAdd() {
    this.store.dispatch(
      customIncrement({
        value: +this.value,
      })
    );
  }

  onChangeText() {
    this.store.dispatch(changeText());
  }
}
