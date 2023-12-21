import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { PokemonDetail } from 'src/app/shared/models/classes/pokemon-detail.model';

@Injectable({ providedIn: 'root' })
export class PokemonState {
  private readonly _pokemon = new BehaviorSubject<PokemonDetail>(null);
  private readonly _pokemons = new BehaviorSubject<PokemonDetail[]>([]);
  private readonly _loading = new BehaviorSubject<boolean>(false);

  //----- array -----
  get pokemons$(): Observable<PokemonDetail[]> {
    return this._pokemons.asObservable();
  }

  set pokemons(data: any[]) {
    this._pokemons.next(data);
  }

  get pokemons(): PokemonDetail[] {
    return this._pokemons.getValue();
  }

  addPokemon(data: PokemonDetail) {
    const currentValue = this.pokemons;
    this.pokemons = [...currentValue, data];
  }

  clearList() {
    this.pokemons = [];
  }

  // ----- loading ------
  get loading$(): Observable<boolean> {
    return this._loading.asObservable();
  }

  set loading(data: boolean) {
    this._loading.next(data);
  }

  get loading(): boolean {
    return this._loading.getValue();
  }

  // ------ one ------
  get onePokemon$(): Observable<PokemonDetail> {
    return this._pokemon.asObservable();
  }

  set onePokemon(data: PokemonDetail) {
    this._pokemon.next(data);
  }

  get onePokemon(): PokemonDetail {
    return this._pokemon.getValue();
  }
}
