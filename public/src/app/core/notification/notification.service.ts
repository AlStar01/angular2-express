import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { MdSnackBar, MdSnackBarRef, SimpleSnackBar } from "@angular/material";

import * as io from 'socket.io-client';
import { Observable } from "rxjs/Observable";

import { Notification } from './notification';
import * as types from './notification.constants';

@Injectable()
export class NotificationService {
  private socket: any;

  notifications: Notification[] = [];

  constructor(
    public router: Router,
    public snackBar: MdSnackBar) {
    this.socket = io({ path: '/ws' });
  }

  getNotification(): Observable<Notification> {
    return new Observable(observer => {
      this.socket.on(types.CATEGORY_ADDED, (notification: Notification) => {
        this.notifications = [...this.notifications, notification];
        this.showNotification(notification);

        observer.next(notification);
      });
    });
  }

  clearNotifications() {
    this.notifications = Object.assign([]);;
  }

  private showNotification(notification: Notification) {
    let snackBarRef: MdSnackBarRef<SimpleSnackBar> = this.snackBar.open(notification.text, 'View', {
      duration: 3000
    });

    snackBarRef.onAction().subscribe(() => this.router.navigate(notification.url));
  }
}
