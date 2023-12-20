import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [],
  styles: `
    .container {
      max-width: var(--container-width);
      padding-inline: var(---size-fluid-2);
      padding-block: var(--size-fluid-4);
      margin-inline: auto;
    }
  `,
  template: ` <div class="container">
    <ng-content></ng-content>
  </div>`,
})
export class ContainerComponent {}
