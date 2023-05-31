import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  showCount = signal<boolean>(false);

  counter = signal<number>(0);

  conditionalCount = computed(() => {
    if (this.showCount()) {
      return `The count is ${this.counter()}.`;
    } else {
      return 'Nothing to see here!';
    }
  });

  increment() {
    this.counter.update((count) => count + 1);
  }

  decrement() {
    this.counter.update((count) => count - 1);
  }

  reset() {
    this.counter.set(0);
  }

  toggleShowCounte() {
    this.showCount.set(!this.showCount());
  }
}
