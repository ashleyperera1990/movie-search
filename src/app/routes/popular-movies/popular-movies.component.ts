import { Component, OnInit } from '@angular/core';
import {MediaListModel} from '../../model/media-list.model';
import {MovieService} from '../../service/movie.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {

  movieList: MediaListModel;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getPopularMovies();
  }

  getPopularMovies() {
    this.movieService.getPopularMovies().subscribe(results => {
      this.movieList = results;
    });
  }

  changePage(page: number) {
    this.movieService.getPopularMovies(page).subscribe(results => {
      this.movieList = results;
    });
  }
}
