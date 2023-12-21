import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  @Output() textSearch = new EventEmitter();

  search() {
    let inputValue: HTMLInputElement = document.querySelector('#search');
    this.textSearch.emit(inputValue.value);
  }
}
