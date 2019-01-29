import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MediaListModel} from '../../model/media-list.model';
import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {MovieModel} from '../../model/movie.model';
import {TvShowModel} from '../../model/tv-show.model';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.scss']
})
export class MediaListComponent implements OnInit {

  @Input() title;
  @Input() showPagination = true;
  @Input() movieList: MediaListModel;
  @Output() onPageChange = new EventEmitter<number>();

  constructor(config: NgbPaginationConfig, private router: Router) {
    config.pageSize = 20;
  }

  ngOnInit() {
  }

  changePage() {
    this.onPageChange.emit(this.movieList.page);
  }

  viewMovie(media) {
    if (media instanceof MovieModel) {
      this.router.navigate(['/movie'], {queryParams: {id: media.id}});
    } else if (media instanceof TvShowModel) {
      this.router.navigate(['/tv-show'], {queryParams: {id: media.id}});
    }
  }
}
