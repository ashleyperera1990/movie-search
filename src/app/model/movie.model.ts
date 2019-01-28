import {Deserialise} from './deserialise';
import {MediaModel} from './media.model';

export class MovieModel extends MediaModel {

  id: number;
  original_title: string;
  tagline: string;
  runtime: number;
  production_countries: any[];

  deserialise(json) {
    Object.assign(this, json);
    return this;
  }

}
