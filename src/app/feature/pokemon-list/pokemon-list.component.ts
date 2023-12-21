import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent {
  offset = 0;

  pokemonList$ = this.pokemonService.pokemons$;

  isLoading$ = this.pokemonService.isLoading$;

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void {
    // this.getPage(this.offset);
  }

  ngAfterViewInit() {}

  getPage(offset: number) {
    this.pokemonService.loadByPage(offset);
  }

  nextPage() {
    this.offset += 20;
    this.getPage(this.offset);
  }

  previousPage() {
    this.offset -= 20;
    this.getPage(this.offset);
  }

  setfilter(filter: string) {
    if (filter == 'todos') {
      this.getPage(this.offset);
      return;
    }

    this.pokemonService.filterForType(filter);
  }

  search(data: any) {
    this.pokemonService.searchForName(data);
  }

  selectCard(data) {
    this.router.navigate(['view', data.name]);
  }
}
