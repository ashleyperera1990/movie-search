import {Deserialise} from './deserialise';
import 'rxjs/add/operator/map';
import {ListModel} from './list.model';
import {MediaVideoModel} from './media-video.model';

export class MediaVideoListModel extends ListModel implements Deserialise {

  deserialise(json) {
    json.results = json.results.map(object => {
      return new MediaVideoModel().deserialise(object);
    });
    Object.assign(this, json);
    return this;
  }
}
