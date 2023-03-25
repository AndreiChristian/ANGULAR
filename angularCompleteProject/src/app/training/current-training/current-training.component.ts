import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingComponent } from '../stop-training/stop-training.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css'],
})
export class CurrentTrainingComponent {
  progress = 0;
  timer: any = 0;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.timer = setInterval(() => {
      this.progress = this.progress + 1;
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 500);
  }

  onStop() {
    clearInterval(this.timer);
    this.dialog.open(StopTrainingComponent, {
      data: {
        progress: this.progress,
      },
    });
  }
}
