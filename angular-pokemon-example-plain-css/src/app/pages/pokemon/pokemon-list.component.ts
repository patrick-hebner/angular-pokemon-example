import { Component, Input, inject } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';
import { ContainerComponent } from '../../components/layout/container.component';
import { PageHeaderComponent } from '../../components/ui/page-header.component';
import { PokemonApiService } from './data/pokemon-api.service';
import { ListComponent } from './ui/list.component';
import { PokemonEntry } from '../../types';
import { NgClass } from '@angular/common';
import { ButtonComponent } from '../../components/ui/button.component';
import { DetailComponent } from './detail.component';
import { RouterModule } from '@angular/router';
import { ImageBannerComponent } from '../../components/ui/image-banner.component';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [
    NgClass,
    LayoutComponent,
    ContainerComponent,
    PageHeaderComponent,
    ListComponent,
    ButtonComponent,
    DetailComponent,
    RouterModule,
    ImageBannerComponent,
  ],
  template: `
    <app-layout>
      <app-container>
        <app-page-header>All Pokemon</app-page-header>
        <article [ngClass]="{ selected: !!name }">
          <div class="list-wrapper">
            <app-list [pokemons]="pokemons()"></app-list>
            <div class="pager">
              <div>
                @if (pokemonsResponse()?.previous) {
                <app-button (click)="prevPage()">PREV</app-button>
                }
              </div>
              <div>
                @if (pokemonsResponse()?.next) {
                <app-button (click)="nextPage()">NEXT</app-button>
                }
              </div>
            </div>
          </div>
          @if (name) {
          <aside>
            <app-detail [name]="name"></app-detail>
          </aside>
          }
        </article>
      </app-container>
      @defer {
      <app-image-banner />
      }
    </app-layout>
  `,
  styles: `
    h1 {
      text-align: center;
    }  

    article {
      display: grid;
      transition: all 200ms;
      grid-template-columns: 1fr;
      
      &.selected {
        grid-template-columns: 2fr 1fr;
        gap: var(--size-fluid-4)
      }
    }

    aside {
      position: sticky;
      top: var(--size-fluid-4);
      height: fit-content;
    }


    .pager {
      display: flex;
      justify-content: space-between;
      margin-top: var(--size-fluid-4);
    }
  `,
})
export class PokemonListComponent {
  @Input() name = '';

  pokemonApiService = inject(PokemonApiService);
  pokemonsResponse = this.pokemonApiService.pokemonResponse;
  pokemons = this.pokemonApiService.pokemons;
  selectedPokemon = this.pokemonApiService.selectedPokemon;

  nextPage() {
    this.pokemonApiService.next();
  }

  prevPage() {
    this.pokemonApiService.prev();
  }
}
