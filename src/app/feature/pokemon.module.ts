import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { CardComponent } from '../shared/components/card/card.component';
import { GetIndividualByIdPipe } from 'src/app/shared/pipes/getIndividualById.pipe';
import { UppercaseFirstPipe } from 'src/app/shared/pipes/uppercaseFirst.pipe';
import { PaginationComponent } from 'src/app/shared/components/pagination/pagination.component';
import { FilterComponent } from 'src/app/shared/components/filter/filter.component';

@NgModule({
  declarations: [
    PokemonListComponent,
    CardComponent,
    GetIndividualByIdPipe,
    UppercaseFirstPipe,
    PaginationComponent,
    FilterComponent,
  ],
  imports: [CommonModule, PokemonRoutingModule],
})
export class PokemonModule {}
