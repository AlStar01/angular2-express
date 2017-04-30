import { Injectable } from '@angular/core';

import * as io from 'socket.io-client';
import { Observable } from "rxjs/Observable";

import { Notification } from './notification';
import * as types from './notification.constants';

@Injectable()
export class NotificationService {
  private socket: any;

  notifications: Notification[] = [];

  constructor() {
    this.socket = io({ path: '/ws' });
  }

  getNotification(): Observable<Notification> {
    return new Observable(observer => {
      this.socket.on(types.CATEGORY_ADDED, (notification: Notification) => {
        this.notifications = [...this.notifications, notification];
        observer.next(notification);
      });
    });
  }

  clearNotifications() {
    this.notifications = Object.assign([]);;
  }
}
