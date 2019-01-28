import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {
  getCreditsForTvShowUrl,
  getPopularTvUrl,
  getReviewsForTvShowUrl,
  getTopRatedTvUrl,
  getTvShowByIdUrl,
  getVideosForTvShowUrl
} from './url.helper';
import 'rxjs/add/operator/map';
import {TvShowModel} from '../model/tv-show.model';
import {CreditsModel} from '../model/credits.model';
import {MediaVideoListModel} from '../model/media-video-list.model';
import {MediaReviewListModel} from '../model/media-review-list.model';
import {MediaListModel} from '../model/media-list.model';

@Injectable()
export class TvShowService {

  constructor(private http: HttpClient) {

  }

  getTvShowById(id) {
    return this.http.get(getTvShowByIdUrl(id)).map(object => {
      return new TvShowModel().deserialise(object);
    });
  }

  getTopTvShows(page?: number) {
    let url = getTopRatedTvUrl();
    if (!page) {
      page = 1;
    }
    url += '&page=' + page;
    return this.http.get(url).map(object => {
      return new MediaListModel().deserialise(object);
    });
  }

  getPopularTvShows(page?: number) {
    let url = getPopularTvUrl();
    if (!page) {
      page = 1;
    }
    url += '&page=' + page;
    return this.http.get(url).map(object => {
      return new MediaListModel().deserialise(object);
    });
  }

  getCreditsForTvShow(id: number) {
    return this.http.get<CreditsModel>(getCreditsForTvShowUrl(id)).map(object => {
      return new CreditsModel().deserialise(object);
    });
  }

  getVideosForTvShow(id: number) {
    return this.http.get<MediaVideoListModel>(getVideosForTvShowUrl(id)).map(results => {
      return new MediaVideoListModel().deserialise(results);
    });
  }

  getReviewsForTvShow(id: number) {
    return this.http.get<MediaReviewListModel>(getReviewsForTvShowUrl(id)).map(object => {
      return new MediaReviewListModel().deserialise(object);
    });
  }

}
