import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {ActivatedRoute} from '@angular/router';
import {SearchService} from '../../service/search.service';
import {ListModel} from '../../model/list.model';
import {MediaListModel} from '../../model/media-list.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchString = '';

  movieList: MediaListModel;

  constructor(private route: ActivatedRoute,
              private movieService: SearchService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchString = params.search;
      if (this.searchString) {
        this.search(params.page);
      }
    });
  }

  search(page) {
    this.movieService.search(this.searchString, page).subscribe((result) => {
      this.movieList = result;
    });
  }
}
