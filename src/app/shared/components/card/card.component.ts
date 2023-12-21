import { Component, Input, OnInit } from '@angular/core';
import { PokemonDetail } from '../../models/classes/pokemon-detail.model';
import { PokemonService } from '../../../feature/services/pokemon.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() pokemonUrl: any;

  pokemon$;
  pokemon: PokemonDetail;
  backgroundType;
  backgroundBadge;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    console.log(this.pokemonUrl);

    this.pokemon$ = this.pokemonService.getPokemonDetail(this.pokemonUrl).pipe(
      tap((x) => {
        this.pokemon = x;
        //     this.backgroundType = `bg-${this.pokemon.types[0].type.name}`;
      })
    );
  }
  ngAfterViewInit() {
    // console.log(this.pokemon);
    // console.log(this.pokemon.types[0].type.name);
    // this.backgroundType = `${this.pokemon.types[0].type.name}`;
    // this.backgroundBadge = `badge-${this.pokemon.types[0].type.name}`;
    // console.log(this.backgroundType);
  }
}
