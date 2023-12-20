import { Component } from '@angular/core';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h1><ng-content></ng-content></h1>
    </div>
  `,
  styles: `
    h1 {
      color: var(--brand);
      text-align: center;
      padding-block: var(--size-fluid-3);
    }
  `,
})
export class PageHeaderComponent {}
