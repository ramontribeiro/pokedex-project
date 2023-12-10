import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonDetail } from 'src/app/feature/pokemon-list/models/pokemon-detail.model';
import { PokemonService } from 'src/app/feature/services/pokemon.service';

@Pipe({
  name: 'getIndividualById',
})
export class GetIndividualByIdPipe implements PipeTransform {
  constructor(private pokemonService: PokemonService) {}

  transform(individualId: any): Observable<PokemonDetail> {
    return this.pokemonService.getPokemonDetail(individualId);
  }
}
