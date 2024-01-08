import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { CardComponent } from '../shared/components/card/card.component';
import { PaginationComponent } from 'src/app/shared/components/pagination/pagination.component';
import { FilterComponent } from 'src/app/shared/components/filter/filter.component';
import { SortByOrderPipe } from '../shared/pipes/sortByOrder.pipe';
import { SearchComponent } from '../shared/components/search/search.component';
import { LoadingComponent } from '../shared/components/loading/loading.component';

@NgModule({
  declarations: [
    PokemonListComponent,
    CardComponent,
    SortByOrderPipe,
    PaginationComponent,
    FilterComponent,
    SearchComponent,
    LoadingComponent,
  ],
  imports: [CommonModule, PokemonRoutingModule],
})
export class PokemonModule {}
