import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-error-notification',
  template: ` <p>{{ data.message }}</p> `,
  styles: [
    `
      p {
        color: red;
        text-align: center;
        margin: 0;
      }
    `,
  ],
})
export class ErrorNotificationComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: { message: string }) {}
}
