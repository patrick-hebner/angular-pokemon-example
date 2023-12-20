import { Component, Input } from '@angular/core';
import { Pokemon, PokemonEntry } from '../../../types';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterModule],
  template: `
    @defer (on viewport) {
    <a [routerLink]="['/pokemon', pokemon.name]" routerLinkActive="active">
      <p>{{ pokemon.name }}</p>
    </a>
    } @placeholder {
    <div>Card</div>
    }
  `,
  styles: `
  
      a {
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        border-radius: var(--radius-1);
        padding-inline: var(--size-fluid-4);
        height: var(--size-fluid-6);
        line-height: var(--size-fluid-6);
        box-shadow: var(--shadow-3);
        width: 100%;
        display: block;
        background: transparent;
        border-radius: var(--radius-1);
        border: var(--border-size-1) solid var(--brand);
        background: var(--surface-3);
        color: var(--brand);
        transition: all 300ms;

        &.active {
          border-color: var(--brand-2);
          color: var(--brand-2);
        }
      }
      a:hover {
        background: var(--surface-1);
      }

      .card-loader {
        height: var(--size-fluid-6);
        border-radius: var(--radius-1);
        background: var(--surface-3);
      }

      p {
        text-transform: uppercase;
      }
  `,
})
export class CardComponent {
  @Input() pokemon!: PokemonEntry;
}
