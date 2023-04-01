import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../store/counter.state';
import { changeText, customIncrement } from '../store/counter.actions';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css'],
})
export class CustomCounterComponent implements OnInit {
  value: number;
  text: string;

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {
    this.store.select('counter').subscribe((data) => {
      console.log('text observable called!');
      this.text = data.text;
    });
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
