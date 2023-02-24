import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `<h1>Success 🌲</h1>`,
  styles: [
    `
      h1 {
        color: green;
      }
    `,
  ],
})
export class SuccessAlertComponent {}
