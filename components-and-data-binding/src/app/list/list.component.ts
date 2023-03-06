import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() userData: {
    userName: string;
    userAge: number;
  };

  @Output() deleteUser = new EventEmitter<string>();

  logUserToRemove() {
    this.deleteUser.emit(this.userData.userName);
  }
}
