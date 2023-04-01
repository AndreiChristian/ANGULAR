import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  counter$ = new BehaviorSubject<number>(0);

  getCounter() {
    return this.counter$.asObservable();
  }

  increment() {
    const counterValue = this.counter$.value;
    this.counter$.next(counterValue + 1);
  }

  decrement() {
    const counterValue = this.counter$.value;
    this.counter$.next(counterValue - 1);
  }

  reset() {
    this.counter$.next(0);
  }
}
