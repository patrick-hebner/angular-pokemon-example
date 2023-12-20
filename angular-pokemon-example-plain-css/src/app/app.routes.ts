import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PokemonListComponent } from './pages/pokemon/pokemon-list.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'pokemon',
    loadChildren: () =>
      import('./pages/pokemon/pokemon.routes').then((r) => r.POKEMON_ROUTES),
  },
];
