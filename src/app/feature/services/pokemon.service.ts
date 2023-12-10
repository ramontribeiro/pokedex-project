import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonList } from '../pokemon-list/models/pokemon-list.model';
import { Observable, map, of, tap } from 'rxjs';
import { PokemonDetail } from '../pokemon-list/models/pokemon-detail.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/';

  filter = '';
  pageList;
  pokemonList;

  constructor(private http: HttpClient) {}

  getFilter() {
    return this.filter;
  }

  setFilter(filter) {
    this.filter = filter;
  }

  listPokemon(): Observable<PokemonDetail[]> {
    return of(this.pokemonList);
  }

  getPokemonList(
    offset: number,
    limit: number = 20
  ): Observable<PokemonList[]> {
    return this.http
      .get<any>(this.baseUrl + 'pokemon?offset=' + offset + '&limit=' + limit)
      .pipe(
        tap((x) => (this.pageList = x.results)),
        map((x: any) => x.results)
      );
  }

  getPokemonDetail(pokemon: string): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>(pokemon);
    // .pipe(tap((x) => console.log(x)));
  }

  filterForType(filter: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}type/${filter}`).pipe(
      tap((x) => console.log(x)),
      map((x: any) => x.pokemon)
    );
  }
}
