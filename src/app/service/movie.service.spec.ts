import {async, TestBed} from '@angular/core/testing';
import {MovieService} from './movie.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {POPULAR_MOVIES} from './test/popular-movies.mock';
import {MediaListModel} from '../model/media-list.model';
import {TOP_MOVIES} from './test/top-movies.mock';
import {MOVIE_CREDITS} from './test/movie-credits.mock';
import {MOVIE_VIDEOS} from './test/movie-videos.mock';
import {MOVIE_REVIEW} from './test/movie-reviews.mock';

describe('MovieService', () => {
  let service: MovieService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService]
    });
    service = TestBed.get(MovieService);
    httpMock = TestBed.get(HttpTestingController);
  }));


  afterEach(async(() => {
    httpMock.verify();
  }));

  it('Should find By ID Should return a movie', async(() => {

    const response = {
      original_title: 'The Scorpion King',
      runtime: 92
    };

    service.findById(9334).subscribe((movie) => {
      expect(movie.original_title).toEqual('The Scorpion King');
      expect(movie.runtime).toEqual(92);
    });

    const req = httpMock.expectOne(`https://api.themoviedb.org/3/movie/9334?api_key=dd1094ac77536e59c8476e60f05b6744&language=en-US`);
    expect(req.request.method).toBe('GET');

    req.flush(response);

  }));

  it('#Find popular movies should return a list of movies', () => {

    service.getPopularMovies().subscribe((movies) => {
      expect(movies.totalResults).toBe(19852);
      expect(movies.results.length).toBe(20);
      expect(movies.page).toBe(1);
      expect(movies.totalPages).toBe(993);
    });

    const req = httpMock.expectOne(`https://api.themoviedb.org/3/movie/popular?api_key=dd1094ac77536e59c8476e60f05b6744&language=en-US&page=1`);
    expect(req.request.method).toBe('GET');

    req.flush(POPULAR_MOVIES);

  });

  it('#Find Top rate movies should return a list of movies', () => {

    service.getTopRatedMovies().subscribe((movies) => {
      expect(movies.totalResults).toBe(6811);
      expect(movies.results.length).toBe(20);
      expect(movies.page).toBe(1);
      expect(movies.totalPages).toBe(341);
    });

    const req = httpMock.expectOne(`https://api.themoviedb.org/3/movie/top_rated?api_key=dd1094ac77536e59c8476e60f05b6744&language=en-US&page=1`);
    expect(req.request.method).toBe('GET');

    req.flush(TOP_MOVIES);
  });

  it('#Find the credits for movie with id', () => {

    service.getCreditsForMovies(297802).subscribe((credits) => {
      expect(credits.crew.length).toBe(35);
      expect(credits.cast.length).toBe(34);
    });

    const req = httpMock.expectOne(`https://api.themoviedb.org/3/movie/297802/credits?api_key=dd1094ac77536e59c8476e60f05b6744&language=en-US`);
    expect(req.request.method).toBe('GET');

    req.flush(MOVIE_CREDITS);
  });

  it('#Find the videos for movie with id', () => {

    service.getVideosForMovie(297802).subscribe((results) => {
      expect(results.results.length).toBe(4);
    });

    const req = httpMock.expectOne(`https://api.themoviedb.org/3/movie/297802/videos?api_key=dd1094ac77536e59c8476e60f05b6744&language=en-US`);
    expect(req.request.method).toBe('GET');

    req.flush(MOVIE_VIDEOS);
  });

  it('#Find the review for movie with id', () => {

    service.getReviewsForMovie(297802).subscribe((results) => {
      expect(results.results.length).toBe(4);
    });

    const req = httpMock.expectOne(`https://api.themoviedb.org/3/movie/297802/reviews?api_key=dd1094ac77536e59c8476e60f05b6744&language=en-US`);
    expect(req.request.method).toBe('GET');

    req.flush(MOVIE_REVIEW);
  });

});
