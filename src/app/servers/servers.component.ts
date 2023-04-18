import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template:`<app-server></app-server>
  // <app-server></app-server>` ,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
    allowNewServer = false;
    serverCreationStatus = 'no server was created';
    serverName='';
    constructor(){
      setTimeout(() => {
        this.allowNewServer = true;
      },2000); 
      
      }

      onCreateServer(){
        this.serverCreationStatus = 'server was created and name is '+this.serverName;
      }

      onUpdateServerName(event:Event){
        this.serverName = (<HTMLInputElement>event.target).value;
      }
    }

