import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css'],
})
export class CounterButtonsComponent {
  constructor(private counterService: CounterService) {}

  increment() {
    this.counterService.increment();
  }

  decrement() {
    this.counterService.decrement();
  }

  reset() {
    this.counterService.reset();
  }

  toggle() {
    this.counterService.toggleShowCounte();
  }
}
