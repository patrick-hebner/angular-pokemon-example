import { Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list.component';

export const POKEMON_ROUTES: Routes = [
  {
    path: '',
    component: PokemonListComponent,
  },
  {
    path: ':name',
    component: PokemonListComponent,
  },
];
