import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DefaultNotificationComponent } from '../components';
import { ErrorNotificationComponent } from '../components/error-notification/error-notification.component';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(type: 'default' | 'error', durationInSeconds: number, message?: string): void {
    switch (type) {
      case 'default':
        this.snackBar.openFromComponent(DefaultNotificationComponent, {
          duration: durationInSeconds * 1000,
        });
        break;

      case 'error':
        this.snackBar.openFromComponent(ErrorNotificationComponent, {
          duration: durationInSeconds * 1000,
          data: {
            message,
          },
        });
        break;

      default:
        break;
    }
  }
}
