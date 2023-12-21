import { Component, EventEmitter, Output } from '@angular/core';
import { TYPES } from '../../models/constants/pokemons-types';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @Output() filter = new EventEmitter();

  types = TYPES;

  filtering(name) {
    this.filter.emit(name);
  }
}
