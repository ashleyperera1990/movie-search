import {ListModel} from './list.model';
import {Deserialise} from './deserialise';
import {MovieModel} from './movie.model';
import 'rxjs/add/operator/map';
import {TvShowModel} from './tv-show.model';

export class MediaListModel extends ListModel implements Deserialise {

  deserialise(json) {
    Object.assign(this, json);
    this.results = json.results.map(movie => {
      if (movie.original_title) {
        return new MovieModel().deserialise(movie);
      } else if (movie.original_name) {
        return new TvShowModel().deserialise(movie);
      }
    });
    this.totalPages = json.total_pages;
    this.totalResults = json.total_results;
    return this;
  }
}
