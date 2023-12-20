import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule],

  template: `
    <div class="page-wrapper">
      <header>
        <nav>
          <a [routerLink]="'/'">Home</a>
          <a [routerLink]="'/pokemon'">All Pokemon</a>
        </nav>
      </header>
      <main>
        <ng-content></ng-content>
      </main>
      <footer>
        <a class="light" href="https://pokeapi.co/">API Docs</a>
      </footer>
    </div>
  `,
  styles: `
  .page-wrapper {
    min-height: 100svh;
    display: flex;
    flex-direction: column;
  }

  main {
    flex-grow: 1;
  }

  header {
    padding-inline: var(--size-fluid-2);
    padding-block: var(--size-fluid-1);

    & nav {
      display: flex;
      align-items: center;
      gap: var(--size-fluid-2);
      & a {
        color: var(--brand);
        text-decoration-color: var(--brand);
        
      }
      & a:hover {
          color: var(--brand-hover);
        }
    }
  }
  footer {
    background: var(--brand);
    color: var(--text-1-dark);
    padding: var(--size-fluid-1);
    text-align: center;

    
  }
`,
})
export class LayoutComponent {}
