import { Component} from '@angular/core';
import { Observable } from 'rxjs';

import { movieService } from '../../../services/movie.service';
import { MatDialog } from '@angular/material/dialog';
import { MovieDetailsComponent } from 'src/app/components/movie-details/movie-details.component';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
})
export class MovieComponent {
  movies: any;
  movie: any;
  movie$!: Observable<{}>;
  movies$!: Observable<[]>;

  constructor(public movieService: movieService, public dialog: MatDialog) {}

  async getInfo(searchBy: Object) {
    this.movies$ = await this.movieService.getMovies(searchBy);
    this.movies$.subscribe((res: any) => {
      console.log(res.Search);
      this.movies = res.Search;
    });
  }

  async openMovieDialog(id: any) {
    console.log(id);
    this.movie$ = await this.movieService.getById(id);
    this.movie$.subscribe((res: any) => {
      this.movie = res;
      this.openDialog(this.movie);
    });
  }
  openDialog(movie: Object) {
    let dialogRef = this.dialog.open(MovieDetailsComponent, {
      data: movie,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}
