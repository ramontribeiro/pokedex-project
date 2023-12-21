import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { PokemonList } from '../../models/classes/pokemon-list.model';
import { PokemonDetail } from '../../models/classes/pokemon-detail.model';

@Injectable({ providedIn: 'root' })
export class PokemonApi {
  private readonly baseUrl = 'https://pokeapi.co/api/v2/';
  // readonly apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getForPage(offset: number, limit: number): Observable<PokemonList[]> {
    return this.http
      .get<any>(`${this.baseUrl}pokemon/?offset=${offset}$limit=${limit}`)
      .pipe(map((x) => x.results));
  }

  getAllDetail(pokemonUrl: string): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>(pokemonUrl);
  }

  getByType(type: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}type/${type}`).pipe();
  }

  getByName(name: string): Observable<PokemonDetail> {
    return this.http.get<any>(`${this.baseUrl}pokemon/${name}/`);
  }
}
