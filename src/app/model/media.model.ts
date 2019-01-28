import {Deserialise} from './deserialise';

export class MediaModel implements Deserialise {

  id: number;
  media_type: string;
  overview: string;
  genres: any[];
  popularity: number;
  poster_path: string;
  vote_average: number;
  release_date: string;
  homepage: string;
  production_companies: any[];

  getPosterPath() {
    return 'https://image.tmdb.org/t/p/w500/' + this.poster_path;
  }

  deserialise(json) {
    Object.assign(this, json);
    return this;
  }

}
