import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {getSearchUrl} from './url.helper';
import {ListModel} from '../model/list.model';
import 'rxjs/add/operator/map';
import {MediaListModel} from '../model/media-list.model';

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) {
  }

  search(searchString: string, page?: number) {
    let url = getSearchUrl(searchString);
    if (!page) {
      page = 1;
    }
    url += '&page=' + page;
    return this.http.get<ListModel>(url).map(object => {
      return new MediaListModel().deserialise(object);
    });
  }
}
