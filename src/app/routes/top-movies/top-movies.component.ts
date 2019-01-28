import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../service/movie.service';
import {MediaListModel} from '../../model/media-list.model';

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.scss']
})
export class TopMoviesComponent implements OnInit {

  movieList: MediaListModel;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getTopRatedMovies();
  }

  getTopRatedMovies() {
    this.movieService.getTopRatedMovies().subscribe(results => {
      this.movieList = results;
    });
  }

  changePage(page: number) {
    this.movieService.getTopRatedMovies(page).subscribe(results => {
      this.movieList = results;
    });
  }
}
