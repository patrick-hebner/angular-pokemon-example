import { HttpClient } from '@angular/common/http';
import { Injectable, computed, signal } from '@angular/core';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { EMPTY, NEVER, catchError, finalize, of, switchMap, tap } from 'rxjs';
import { Pokemon, PokemonEntry, Response } from '../../../types/index';

@Injectable({
  providedIn: 'root',
})
export class PokemonApiService {
  constructor(private http: HttpClient) {}

  private readonly pokemonDetailsBaseUrl = 'https://pokeapi.co/api/v2/pokemon';

  pagedEndpoint = signal<string>('https://pokeapi.co/api/v2/pokemon');
  selectedPokemonEndpoint = signal<string | undefined>(undefined);

  private pokemonResponse$ = toObservable(this.pagedEndpoint).pipe(
    switchMap((url: string) => {
      return this.http.get<Response<PokemonEntry>>(url);
    })
  );

  private selectedPokemonResponse$ = toObservable(
    this.selectedPokemonEndpoint
  ).pipe(
    switchMap((url: string | undefined) => {
      if (url) {
        return this.http.get<Pokemon>(url);
      }
      return of(undefined);
    })
  );

  pokemonResponse = toSignal(this.pokemonResponse$, {
    initialValue: undefined,
  });

  pokemons = computed(() => this.pokemonResponse()?.results || []);

  selectedPokemon = toSignal(this.selectedPokemonResponse$, {
    initialValue: undefined,
  });

  select(name: string) {
    this.selectedPokemonEndpoint.set(`${this.pokemonDetailsBaseUrl}/${name}`);
  }

  next() {
    const url = this.pokemonResponse()?.next;
    if (url) {
      this.pagedEndpoint.set(url);
    }
  }

  prev() {
    const url = this.pokemonResponse()?.previous;
    if (url) {
      this.pagedEndpoint.set(url);
    }
  }
}
