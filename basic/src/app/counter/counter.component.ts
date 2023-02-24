import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: [
    `
      .fiverr {
        color: green;
      }
    `,
  ],
})
export class CounterComponent {
  counterValue: number = 0;
  clicks: number[] = [];

  onIncrementCounter() {
    this.counterValue++;
    this.clicks.push(this.counterValue);
  }
}
