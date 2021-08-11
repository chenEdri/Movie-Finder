import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent {
  searchBy = {
    title: '',
    type: '',
    plot: '',
    year: '',
  };

  @Output() getInfo: EventEmitter<Object> = new EventEmitter()
  constructor() {}

  onSearchMovie() {
   this.getInfo.emit(this.searchBy);
    this.searchBy = {
      title: '',
      type: '',
      plot: '',
      year: '',
    };
  }
}
