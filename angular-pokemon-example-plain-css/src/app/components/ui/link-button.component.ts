import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-link-button',
  standalone: true,
  imports: [RouterModule],
  template: `<a [routerLink]="url"><ng-content></ng-content></a> `,
  styles: `
    a {
      background: var(--brand);
      color: white;
      padding-inline: var(--size-4);
      padding-block: var(--size-2);
      border-radius: var(--radius-1);
      text-decoration: none;
      transition: all 200ms;
      margin: 0;
      display: inline-block;


      &:hover {
        background: var(--brand-hover);
      }
    }

    :host[large] a {
      font-size: var(--font-size-4);
    }
  `,
})
export class LinkButtonComponent {
  @Input() url: string | any[] | null | undefined = '';
}
