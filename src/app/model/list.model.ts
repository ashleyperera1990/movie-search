import {Deserialise} from './deserialise';

export class ListModel implements Deserialise{

  page: number;
  results: any[];
  totalPages: number;
  totalResults: number;

  deserialise(json) {
    Object.assign(this, json);
    return this;
  }

}
