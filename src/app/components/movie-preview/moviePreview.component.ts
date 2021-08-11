import { Component, Input,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-movie-preview',
  templateUrl:'./moviePreview.component.html',
  styles: [
  ]
})
export class MoviePreviewComponent {
  constructor(){}
  @Output() openM: EventEmitter<Object> = new EventEmitter()
  @Input() movie: any;

  openDialog(movie:any){
    this.openM.emit(movie.imdbID);
  }
}
