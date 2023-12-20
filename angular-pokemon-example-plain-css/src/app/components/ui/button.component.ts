import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  template: `<button><ng-content></ng-content></button> `,
  styles: `
    button {
      background: var(--brand);
      color: white;
      padding-inline: var(--size-4);
      padding-block: var(--size-2);
      border-radius: var(--radius-1);
      transition: all 200ms;

      &:hover {
        background: var(--brand-hover);
      }
    }

    :host[large] button {
      font-size: var(--font-size-4);
    }
  `,
})
export class ButtonComponent {}
