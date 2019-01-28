import {Deserialise} from './deserialise';

export class CrewMemberModel implements Deserialise{
  name: string;

  deserialise(json) {
    Object.assign(this, json);
    return this;
  }
}
