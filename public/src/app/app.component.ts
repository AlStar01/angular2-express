import { Component, OnInit } from '@angular/core';

import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Welcome!';

  private socket: any;

  ngOnInit() {
    this.socket = io({ path: '/ws' });

    this.socket.on('foo', (msg) => console.log(msg));
    this.socket.emit('foo', 'bazbazbaz');
  }
}
