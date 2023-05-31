import {
  Component,
  OnInit,
  Signal,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  counter: Signal<string>;

  // doubleCount: Signal<s> = computed(() => this.counter() * 2);

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.counter = this.counterService.conditionalCount;
  }

  resetDoubleCount() {
    // this.doubleCount.set(0) WRONG
  }
}
