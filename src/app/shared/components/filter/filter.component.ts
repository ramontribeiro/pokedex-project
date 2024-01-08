import { Component, EventEmitter, Output } from '@angular/core';
import { TYPES } from '../../models/constants/pokemons-types';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @Output() filter = new EventEmitter();

  isOpen = false;
  pokemonsTypes = TYPES;
  lastfilter: string = '';

  handleDropDown() {
    this.isOpen = !this.isOpen;
  }

  filtering(name) {
    this.handleDropDown();

    if (this.lastfilter == name) {
      // alert('Mesmo filtro!')
      return;
    }

    this.lastfilter = name;
    this.filter.emit(name);
  }
}
