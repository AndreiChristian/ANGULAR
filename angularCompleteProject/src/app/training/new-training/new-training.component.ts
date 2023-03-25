import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css'],
})
export class NewTrainingComponent {
  @Output() trainingStart = new EventEmitter<void>();

  exercises = [
    { value: 'crunches', viewValue: 'Crunches' },
    { value: 'burpees', viewValue: 'Burpees' },
    { value: 'tacos-2', viewValue: 'Curls' },
  ];

  onStartTraining() {
    this.trainingStart.emit();
  }
}
