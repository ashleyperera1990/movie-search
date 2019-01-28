import {Deserialise} from './deserialise';

export class MediaVideoModel implements Deserialise {

  name: string;
  key: string;

  deserialise(json) {
    Object.assign(this, json);
    return this;
  }

}
