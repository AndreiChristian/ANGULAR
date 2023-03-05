import { Component } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
})
export class DashComponent {
  newName: string = '';
  newAge: number = 0;

  onLogInfo() {
    console.log(`name:${this.newName}; age:${this.newAge}`);
  }
}
