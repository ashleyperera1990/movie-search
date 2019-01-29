import {AfterContentChecked, AfterContentInit, AfterViewChecked, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {MovieService} from '../../service/movie.service';
import {MovieModel} from '../../model/movie.model';
import {MediaListModel} from '../../model/media-list.model';
import {CreditsModel} from '../../model/credits.model';
import {MediaVideoListModel} from '../../model/media-video-list.model';
import {MediaReviewListModel} from '../../model/media-review-list.model';
import {NgbTabset} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie: MovieModel;
  similarMovies: MediaListModel;
  credits: CreditsModel;
  videos: MediaVideoListModel;
  reviews: MediaReviewListModel;

  @ViewChild('tabs')
  private tabs: NgbTabset;

  constructor(private route: ActivatedRoute,
              private movieService: MovieService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.movieService.findById(params.id).subscribe(result => {
        this.movie = result;
        this.initMovieData();
      });
    });

  }

  initMovieData() {
    this.getCredits();
    this.getReviews();
    this.getTop5SimilarMovies();
    this.getVideos();
    this.initTabset();
  }

  getCredits() {
    this.movieService.getCreditsForMovies(this.movie.id).subscribe(result => {
      this.credits = result;
    });
  }

  getTop5SimilarMovies() {
    if (this.movie) {
      this.movieService.getSimilarMovies(this.movie.id).subscribe(results => {
        results.results = results.results.splice(1, 5);
        this.similarMovies = results;
      });
    }
  }

  getVideos() {
    this.movieService.getVideosForMovie(this.movie.id).subscribe(results => {
      this.videos = results;
    });
  }

  getReviews() {
    this.movieService.getReviewsForMovie(this.movie.id).subscribe(results => {
      this.reviews = results;
    });
  }

  initTabset() {
    if (this.tabs && this.tabs.activeId !== 'details') {
      this.tabs.select('details');
    }
  }

}
