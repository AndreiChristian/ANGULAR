import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  counter: number = 0;

  increment() {
    this.counter++;
    console.log(this.counter);
  }
}
