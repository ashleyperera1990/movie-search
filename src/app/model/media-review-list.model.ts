import {ListModel} from './list.model';
import {Deserialise} from './deserialise';
import 'rxjs/add/operator/map';
import {MediaReviewModel} from './media-review.model';

export class MediaReviewListModel extends ListModel implements Deserialise {

  deserialise(json) {
    json.results = json.results.map(object => {
      return new MediaReviewModel().deserialise(object);
    });
    Object.assign(this, json);
    return this;
  }

}
