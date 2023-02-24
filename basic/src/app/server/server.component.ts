import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      .online {
        color: green;
      }
      .offline {
        color: red;
      }
    `,
  ],
})
export class ServerComponent {
  servedId: number = 10;
  serverStatus: 'online' | 'offline' = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
