import { Component, Inject, Input, OnChanges, inject } from '@angular/core';
import { StatsComponent } from './ui/stats.component';
import { PokemonApiService } from './data/pokemon-api.service';
import { LinkButtonComponent } from '../../components/ui/link-button.component';
import {
  Dialog,
  DialogModule,
  DIALOG_SCROLL_STRATEGY,
} from '@angular/cdk/dialog';

import { InfoDialogComponent } from './ui/info-dialog.compoent';
import { ButtonComponent } from '../../components/ui/button.component';
import { Overlay } from '@angular/cdk/overlay';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [LinkButtonComponent, ButtonComponent, StatsComponent, DialogModule],
  providers: [
    {
      provide: DIALOG_SCROLL_STRATEGY,
      useFactory: () => {
        const overlay = inject(Overlay);
        return () => overlay.scrollStrategies.block();
      },
    },
  ],
  template: `@if (selectedPokemon()) {
    <article>
      <div class="actions">
        <app-link-button [url]="['/pokemon']">close</app-link-button>
        <app-button (click)="showInfo()">i</app-button>
      </div>
      <div class="center">
        <img [src]="selectedPokemon()!.sprites.front_default" />
        <div>
          <h2>{{ selectedPokemon()!.name }}</h2>
          <app-stats [stats]="selectedPokemon()!.stats"></app-stats>
        </div>
      </div>
    </article>
    }`,
  styles: `
    article {
      position: relative;
      padding: var(--size-fluid-3);
      background: var(--surface-3);
      border-radius: var(--radius-1);
      box-shadow: var(--shadow-3);
      border: var(--border-size-1) solid var(--brand);

      & .center {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      & img {
        aspect-ratio: var(--ratio-square);
       
      }

      & h2 {
        text-align: center;
        color: var(--brand);
        text-transform: uppercase;
      }
    }

    .actions {
      position: absolute;
      right: var(--size-2);
      top: var(--size-2);
      display: flex;
      gap: var(--size-2);

      app-button {

      }
    }`,
})
export class DetailComponent implements OnChanges {
  @Input() name = '';

  dialog = inject(Dialog);

  pokemonApiService = inject(PokemonApiService);
  selectedPokemon = this.pokemonApiService.selectedPokemon;

  constructor(private overlay: Overlay) {}

  showInfo() {
    this.dialog.open(InfoDialogComponent, {
      minWidth: '300px',
      data: {
        pokemon: this.selectedPokemon(),
      },
    });
  }

  ngOnChanges(): void {
    if (this.name) {
      this.pokemonApiService.select(this.name);
    }
  }
}
