import { Component, OnInit } from '@angular/core';
import {MediaListModel} from '../../model/media-list.model';
import {TvShowService} from '../../service/tv-show.service';

@Component({
  selector: 'app-popular-tv',
  templateUrl: './popular-tv.component.html',
  styleUrls: ['./popular-tv.component.scss']
})
export class PopularTvComponent implements OnInit {

  mediaList: MediaListModel;

  constructor(private tvService: TvShowService) { }

  ngOnInit() {
    this.getTopRatedTv();
  }

  getTopRatedTv() {
    this.tvService.getPopularTvShows().subscribe(results => {
      this.mediaList = results;
    });
  }

  changePage(page: number) {
    this.tvService.getPopularTvShows(page).subscribe(results => {
      this.mediaList = results;
    });
  }

}
