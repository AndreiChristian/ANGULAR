import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css'],
})
export class CounterButtonsComponent {
  @Output() incrementEvent = new EventEmitter<void>();
  @Output() decrementEvent = new EventEmitter<void>();
  @Output() resetEvent = new EventEmitter<void>();

  onIncrement() {
    this.incrementEvent.emit();
  }

  onDecrement() {
    this.decrementEvent.emit();
  }

  onReset() {
    this.resetEvent.emit();
  }
}
