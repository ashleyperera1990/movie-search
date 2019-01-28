import {HttpClient} from '@angular/common/http';
import {MediaListModel} from '../model/media-list.model';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';
import {MovieModel} from '../model/movie.model';
import {
  getCreditsForMovieUrl,
  getMovieByIdUrl,
  getPopularMoviesUrl,
  getReviewsForMovieUrl,
  getSimilarMovies,
  getTopRatedMoviesUrl,
  getVideosForMovieUrl
} from './url.helper';
import {CreditsModel} from '../model/credits.model';
import {MediaVideoListModel} from '../model/media-video-list.model';
import {MediaReviewListModel} from '../model/media-review-list.model';

@Injectable()
export class MovieService {

  constructor(private http: HttpClient) {
  }

  findById(id: any) {
    const url = getMovieByIdUrl(id);
    return this.httpGetAndDeserialiseMovieModel(url);
  }

  getTopRatedMovies(page?: number) {
    let url = getTopRatedMoviesUrl();
    if (!page) {
      page = 1;
    }
    url += '&page=' + page;
    return this.httpGetAndDeserialiseMovieList(url);
  }

  getPopularMovies(page?: number) {
    let url = getPopularMoviesUrl();
    if (!page) {
      page = 1;
    }
    url += '&page=' + page;
    return this.httpGetAndDeserialiseMovieList(url);
  }

  getSimilarMovies(id: number, page?: number) {
    let url = getSimilarMovies(id);
    if (!page) {
      page = 1;
    }
    url += '&page=' + page;
    return this.httpGetAndDeserialiseMovieList(url);
  }

  getCreditsForMovies(id: number) {
    return this.http.get<CreditsModel>(getCreditsForMovieUrl(id)).map(object => {
      return new CreditsModel().deserialise(object);
    });
  }

  getVideosForMovie(id: number) {
    return this.http.get<MediaVideoListModel>(getVideosForMovieUrl(id)).map(results => {
      return new MediaVideoListModel().deserialise(results);
    });
  }

  getReviewsForMovie(id: number) {
    return this.http.get<MediaReviewListModel>(getReviewsForMovieUrl(id)).map(object => {
      return new MediaReviewListModel().deserialise(object);
    });
  }

  httpGetAndDeserialiseMovieList(url) {
    return this.http.get<MediaListModel>(url).map(object => {
      return new MediaListModel().deserialise(object);
    });
  }

  httpGetAndDeserialiseMovieModel(url) {
    return this.http.get<MovieModel>(url).map(object => {
      return new MovieModel().deserialise(object);
    });
  }
}
