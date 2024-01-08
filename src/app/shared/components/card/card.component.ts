import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() pokemon: any;
  @Output() selectItem = new EventEmitter();

  ngOnInit(): void {
    console.log(this.pokemon);
  }

  select(item) {
    this.selectItem.emit(item);
  }
}
