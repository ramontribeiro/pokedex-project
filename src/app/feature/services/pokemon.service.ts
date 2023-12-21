import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonList } from '../../shared/models/classes/pokemon-list.model';
import {
  Observable,
  filter,
  finalize,
  map,
  mergeMap,
  of,
  tap,
  toArray,
} from 'rxjs';
import { PokemonDetail } from '../../shared/models/classes/pokemon-detail.model';
import { PokemonState } from '../state/pokemon.state';
import { PokemonApi } from 'src/app/shared/services/API/pokemon-api.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private state: PokemonState, private http: PokemonApi) {}

  //----- loading ----

  get isLoading$(): Observable<boolean> {
    return this.state.loading$;
  }

  // ------ one ------
  get selectOnePokemon(): Observable<PokemonDetail> {
    return this.state.onePokemon$;
  }

  changeSelectPokemon(data) {
    this.state.onePokemon = data;
  }

  setByname(name: string) {
    this.http
      .getByName(name.toLowerCase())
      .subscribe((result) => (this.state.onePokemon = result));
  }

  //----- data -------

  get pokemons$(): Observable<PokemonDetail[]> {
    return this.state.pokemons$;
  }

  private getData(dataPokemon$: Observable<PokemonDetail>): void {
    // this.state.clearList(); //todo - não precisa utilizar, quanto utilizado toArray e ln 41

    dataPokemon$
      .pipe(
        toArray(), //todo - agrupa o retorno de cada requisição em um array
        // map(pokemon => pokemon.sort((a, b) => a.id - b.id)), //todo - ordenar array pelo id
        finalize(() => (this.state.loading = false))
      )
      .subscribe((resultPokemon) => {
        this.state.pokemons = resultPokemon; //todo - utilizada em conjunto com o toArray
        // this.state.addPokemon(this.createClassPokemon(resultPokemon)) //todo - caso não utilizar toArray()
      });
  }

  loadByPage(offset: number, limit: number = 20) {
    this.state.loading = true;

    const dataPageWithPokemons$ = this.http.getForPage(offset, limit).pipe(
      mergeMap((result) => result),
      mergeMap((result) => this.http.getByName(result.name))
    );

    this.getData(dataPageWithPokemons$);
  }

  filterForType(tipo: string) {
    this.state.loading = true;

    const dataPokemonsByType$ = this.http.getByType(tipo).pipe(
      mergeMap((result: any) => result.pokemon),
      mergeMap((result: any) => this.http.getByName(result.pokemon.name)),
      filter((pokemon: PokemonDetail) => pokemon.types[0].type.name == tipo)
    );

    this.getData(dataPokemonsByType$);
  }

  searchForName(data: string) {
    this.state.loading = true;

    const dataSearchPokemon$ = this.http.getByName(data.toLowerCase());

    this.getData(dataSearchPokemon$);
  }

  //----- utilities ------

  private setTypes(data) {
    const typesNames: any[] = [];
    data.types.forEach((type) => typesNames.push(type.type.name));

    return typesNames;
  }

  private setImage(data) {
    return data.sprites.other.dream_world.front_default
      ? data.sprites.other.dream_world.front_default
      : data.sprites.front_default;
  }

  private createClassPokemon(data) {
    return new PokemonDetail(
      data.id,
      data.name,
      this.setTypes(data),
      this.setImage(data)
    );
  }
}
