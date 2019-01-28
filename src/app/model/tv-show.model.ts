import {MediaModel} from './media.model';

export class TvShowModel extends MediaModel {

  name: string;
  first_air_date: string;
  number_of_seasons: number;
  number_of_episodes: number;
  networks: any[];

  deserialise(json) {
    Object.assign(this, json);
    return this;
  }

}
