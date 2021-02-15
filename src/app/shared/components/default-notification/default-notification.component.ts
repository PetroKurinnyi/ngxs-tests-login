import { Component } from '@angular/core';

@Component({
  selector: 'app-default-notification',
  template: ` <p>¯\\_(ツ)_/¯</p> `,
  styles: [
    `
      p {
        text-align: center;
        margin: 0;
      }
    `,
  ],
})
export class DefaultNotificationComponent {
  constructor() {}
}
