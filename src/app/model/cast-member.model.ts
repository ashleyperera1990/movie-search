import {Deserialise} from './deserialise';

export class CastMemberModel implements Deserialise {

  character: string;
  name: string;

  deserialise(json) {
    Object.assign(this, json);
    return this;
  }
}
