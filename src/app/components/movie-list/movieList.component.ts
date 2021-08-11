import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl:'./movieList.component.html',
  styles: [
  ]
})
export class MovieListComponent {
  @Output() openMovieDialog: EventEmitter<Object> = new EventEmitter()
  constructor(){}
  @Input() movies: any;

  openM(id:any){
    this.openMovieDialog.emit(id);
  }
}
