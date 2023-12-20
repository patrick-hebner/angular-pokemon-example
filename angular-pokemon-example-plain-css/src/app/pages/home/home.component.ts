import { Component } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';
import { ContainerComponent } from '../../components/layout/container.component';
import { SpacerComponent } from '../../components/layout/spacer.component';
import { LinkButtonComponent } from '../../components/ui/link-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LayoutComponent,
    ContainerComponent,
    SpacerComponent,
    LinkButtonComponent,
  ],
  styles: `
  h1 {
    color: var(--brand);
    text-align: center;
  }

  img {
    margin: auto;
  }

  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--size-fluid-2);
  }
  `,
  template: `
    <app-layout>
      <app-container>
        <app-spacer large></app-spacer>
        <div class="center">
          <img src="/assets/images/logo.png" />
          <h1>Pokemon Demo App</h1>
          <app-link-button large url="/pokemon"
            >Show me all pokemon!</app-link-button
          >
        </div>
      </app-container>
    </app-layout>
  `,
})
export class HomeComponent {}
