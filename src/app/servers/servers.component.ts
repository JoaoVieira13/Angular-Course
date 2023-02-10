import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allownewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allownewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server ' + this.serverName + ' was created!';
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(e) {
    this.serverName = e.target.value;
  }

  ngOnInit() {
  }

}
