import { Component } from '@angular/core';

@Component({
  selector: 'app-spacer',
  standalone: true,
  imports: [],
  template: ``,
  styles: `
  :host {
    display: block;
    padding-block: var(--size-fluid-4);
  }
  :host[small] {
    padding-block: var(--size-fluid-2);
  }
  :host[large] {
    padding-block: var(--size-fluid-6);
  }
  `,
})
export class SpacerComponent {}
