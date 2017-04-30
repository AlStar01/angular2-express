import { Component } from '@angular/core';
import { NotificationService } from "./core/notification/notification.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NotificationService]
})
export class AppComponent {
  title = 'Welcome!';

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.getNotification().subscribe(notification => console.log(notification));
  }
}
