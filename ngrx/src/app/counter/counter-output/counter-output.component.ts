import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { CounterState } from '../store/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit {
  counter$: Observable<CounterState>;

  counter: number;

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {
    this.counter$ = this.store.select('counter');

    this.store.select('counter').subscribe((data) => {
      console.log("counter observable called")
      this.counter = data.counter;
    });
  }
}
