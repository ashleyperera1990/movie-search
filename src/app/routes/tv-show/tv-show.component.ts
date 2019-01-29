import {Component, OnInit, ViewChild} from '@angular/core';
import {TvShowModel} from '../../model/tv-show.model';
import {ActivatedRoute} from '@angular/router';
import {TvShowService} from '../../service/tv-show.service';
import {CreditsModel} from '../../model/credits.model';
import {MediaVideoListModel} from '../../model/media-video-list.model';
import {MediaReviewListModel} from '../../model/media-review-list.model';
import {NgbTabset} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.scss']
})
export class TvShowComponent implements OnInit {

  tvShow: TvShowModel;
  credits: CreditsModel;
  videos: MediaVideoListModel;
  reviews: MediaReviewListModel;

  constructor(private route: ActivatedRoute,
              private tvService: TvShowService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.tvService.getTvShowById(params.id).subscribe(result => {
        this.tvShow = result;
        this.initTVData();
      });
    });
  }

  initTVData() {
    this.getCredits();
    this.getReviews();
    this.getVideos();
  }

  getCredits() {
    this.tvService.getCreditsForTvShow(this.tvShow.id).subscribe(result => {
      this.credits = result;
    });
  }

  getVideos() {
    this.tvService.getVideosForTvShow(this.tvShow.id).subscribe(results => {
      this.videos = results;
    });
  }

  getReviews() {
    this.tvService.getReviewsForTvShow(this.tvShow.id).subscribe(results => {
      this.reviews = results;
    });
  }

}
