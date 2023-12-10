import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @Output() filter = new EventEmitter();

  types = [
    {
      name: 'bug',
      src: '../../../../assets/types-icons/bug.svg',
    },
    {
      name: 'dark',
      src: '../../../../assets/types-icons/dark.svg',
    },
    {
      name: 'dragon',
      src: '../../../../assets/types-icons/dragon.svg',
    },
    {
      name: 'electric',
      src: '../../../../assets/types-icons/electric.svg',
    },
    {
      name: 'fairy',
      src: '../../../../assets/types-icons/fairy.svg',
    },
    {
      name: 'fighting',
      src: '../../../../assets/types-icons/fighting.svg',
    },
    {
      name: 'fire',
      src: '../../../../assets/types-icons/fire.svg',
    },
    {
      name: 'flying',
      src: '../../../../assets/types-icons/flying.svg',
    },
    {
      name: 'ghost',
      src: '../../../../assets/types-icons/ghost.svg',
    },
    {
      name: 'grass',
      src: '../../../../assets/types-icons/grass.svg',
    },
    {
      name: 'ground',
      src: '../../../../assets/types-icons/ground.svg',
    },
    {
      name: 'ice',
      src: '../../../../assets/types-icons/ice.svg',
    },
    {
      name: 'normal',
      src: '../../../../assets/types-icons/normal.svg',
    },
    {
      name: 'poison',
      src: '../../../../assets/types-icons/poison.svg',
    },
    {
      name: 'psychic',
      src: '../../../../assets/types-icons/psychic.svg',
    },
    {
      name: 'rock',
      src: '../../../../assets/types-icons/rock.svg',
    },
    {
      name: 'steel',
      src: '../../../../assets/types-icons/steel.svg',
    },
    {
      name: 'water',
      src: '../../../../assets/types-icons/water.svg',
    },
  ];

  filtering(name) {
    this.filter.emit(name);
  }
}
