import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
})
export class DashComponent {
  newName: string = '';
  newAge: number = 0;

  @Output() newPersonAdded = new EventEmitter<{
    userName: string;
    userAge: number;
  }>();

  onLogInfo() {
    this.newPersonAdded.emit({
      userName: this.newName,
      userAge: this.newAge,
    });
  }
}
