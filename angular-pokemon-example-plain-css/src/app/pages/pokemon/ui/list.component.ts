import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon, PokemonEntry } from '../../../types';
import { CardComponent } from './card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent],
  template: `
    <ul>
      @for (pokemon of pokemons; track $index) {
      <li>
        <app-card (click)="select(pokemon)" [pokemon]="pokemon"></app-card>
      </li>
      } @empty {
      <li>
        <div class="loader"></div>
      </li>
      <li>
        <div class="loader"></div>
      </li>
      <li>
        <div class="loader"></div>
      </li>
      <li>
        <div class="loader"></div>
      </li>
      <li>
        <div class="loader"></div>
      </li>
      <li>
        <div class="loader"></div>
      </li>
      }
    </ul>
  `,
  styles: `
    ul {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
      gap: var(--size-fluid-2);
    }

    .loader {
      border-radius: var(--radius-1);
      height: var(--size-fluid-6);
      background: var(--surface-3);
    }

  `,
})
export class ListComponent {
  @Input() pokemons: PokemonEntry[] = [];
  @Output() selectPokemon = new EventEmitter<PokemonEntry>();

  select(p: PokemonEntry) {
    this.selectPokemon.emit(p);
  }
}
