import { Component, EventEmitter, Output } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css'],
})
export class CounterButtonsComponent {
  constructor(private counterService: CounterService) {}

  onIncrement() {
    this.counterService.increment();
  }

  onDecrement() {
    this.counterService.decrement();
  }

  onReset() {
    this.counterService.reset();
  }
}
