import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `<h1>HELLO, I AM THE APP-SERVERS COMPONENT</h1>`,
  styleUrls: ['./servers.component.css'],
  // styles: [
  //   `
  //     * {
  //       color: red;
  //     }
  //   `,
  // ],
})
export class ServersComponent {
  serverId = 10;
  serverStatus: 'online' | 'offline' = 'online';
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TOTO';
  serverCreated: boolean = false;
  servers: string[] = ['Test', 'Prod'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  getServerStatus() {
    return this.serverStatus;
  }

  onCreateSever() {
    this.serverCreated = true;
    this.serverCreationStatus =
      'New server created! The new server name is ' + this.serverName + '.';
    this.servers.push(this.serverName);
  }
}
