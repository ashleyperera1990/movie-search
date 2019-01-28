import { Component, OnInit } from '@angular/core';
import {TvShowService} from '../../service/tv-show.service';
import {MediaListModel} from '../../model/media-list.model';

@Component({
  selector: 'app-top-tv',
  templateUrl: './top-tv.component.html',
  styleUrls: ['./top-tv.component.scss']
})
export class TopTvComponent implements OnInit {

  showList: MediaListModel;

  constructor(private tvService: TvShowService) { }

  ngOnInit() {
    this.getTopRatedTv();
  }

  getTopRatedTv() {
    this.tvService.getTopTvShows().subscribe(results => {
      this.showList = results;
    });
  }

  changePage(page: number) {
    this.tvService.getTopTvShows(page).subscribe(results => {
      this.showList = results;
    });
  }
}
