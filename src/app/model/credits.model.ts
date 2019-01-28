import {CastMemberModel} from './cast-member.model';
import {CrewMemberModel} from './crew-member.model';
import {Deserialise} from './deserialise';
import 'rxjs/add/operator/map';

export class CreditsModel implements Deserialise {

  cast: CastMemberModel[];
  crew: CrewMemberModel[];

  deserialise(json) {
    Object.assign(this, json);
    this.cast = json.cast.map(member => {
      return new CastMemberModel().deserialise(member);
    });
    this.crew = json.crew.map(member => {
      return new CrewMemberModel().deserialise(member);
    });
    return this;
  }

}

