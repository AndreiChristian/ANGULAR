import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users: {
    userName: string;
    userAge: number;
  }[] = [
    {
      userName: 'Max',
      userAge: 34,
    },
    {
      userName: 'Andrei',
      userAge: 32,
    },
  ];

  serverElements = [
    {
      type: 'server',
      name: 'Test',
      content: 'Just a test',
    },
  ];

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(blueprintData: {
    blueprintName: string;
    blueprintContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.blueprintName,
      content: blueprintData.blueprintContent,
    });
  }

  onNewPersonAdded(userData: { userName: string; userAge: number }) {
    this.users.push({
      userName: userData.userName,
      userAge: userData.userAge,
    });
  }

  onDeleteUser(userName: any) {
    this.users = this.users.filter((user) => user.userName !== userName);
    console.log('user should be deleted', userName);
  }
}
