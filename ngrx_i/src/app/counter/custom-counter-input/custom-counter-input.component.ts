import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css'],
})
export class CustomCounterInputComponent {
  customIncrement = 0;

  increment() {
    this.customIncrement = this.customIncrement + 1;
  }

  decrement() {
    this.customIncrement--;
  }

  addCustomIncrement() {}
}
