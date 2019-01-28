import {Deserialise} from './deserialise';

export class MediaReviewModel implements Deserialise {

  author: string;
  content: string;

  isCollapsed = true;

  deserialise(json) {
    Object.assign(this, json);
    return this;
  }

  isContentCollapsible() {
    return this.content.length > 500;
  }

}
