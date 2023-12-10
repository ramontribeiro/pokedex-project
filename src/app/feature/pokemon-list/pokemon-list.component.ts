import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { PokemonList } from './models/pokemon-list.model';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent {
  // private offset: number;
  // pokemonList!: PokemonList[];

  pokemonList$;
  list = [];
  listDetail = [];

  offset = 0;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPage(this.offset);
  }

  setfilter(filter) {
    console.log(filter);

    // this.pokemonService.setFilter(filter);
    this.pokemonService
      .filterForType(filter)
      .pipe(
        tap((x) => {
          this.list = x;
          console.log(x);
        })
      )
      .subscribe();
  }

  getPage(offset: number) {
    this.pokemonList$ = this.pokemonService.getPokemonList(offset).pipe(
      // map((x) =>
      //   x.map((x) =>
      //     this.pokemonService
      //       .getPokemonDetail(x.url)
      //       .subscribe({
      //         next: (resp) => {
      //           this.list.push(resp);
      //         },
      //       })
      //   )
      // )
      tap((x) => {
        this.list = x;
        console.log(x);
        // this.listDetail.map(individual => {
        //   this.pokemonService.getPokemonDetail(individual.url)
        // })
      })
    );
  }

  nextPage() {
    this.offset += 20;
    this.getPage(this.offset);
  }

  previousPage() {
    this.offset -= 20;
    this.getPage(this.offset);
  }

  // getIndvidual(individual){
  //   this.pokemonService.getPokemonDetail(individual.url).subscribe({
  //     next: (resp) => {
  //       this.list.push(resp)
  //     }
  //   })
  // }

  // getPage(offset: number) {
  // if(!this.isLoading && !this.isLastPage) {
  //   this.isLoading = true;
  // this.pokemonService.getPokemonList(offset);
  // .subscribe((list: PokemonList[]) => {
  //   console.log(list);
  //   this.pokemonList = list;
  // if(list.length === 0) {
  //   this.isLastPage = true;
  // }

  // if(!this.isLastPage) {
  //   this.getPokemon(list);
  // }
  // });
  // }
  // }
}
