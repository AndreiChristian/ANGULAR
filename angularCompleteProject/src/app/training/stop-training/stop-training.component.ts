import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-stop-training',
  templateUrl: './stop-training.component.html',
  styleUrls: ['./stop-training.component.css'],
})
export class StopTrainingComponent {
  progress = 0;

  constructor(@Inject(MAT_DIALOG_DATA) private passedData: any) {}

  ngOnInit() {
    this.progress = this.passedData.progress;
  }
}
