import {Component, Input, OnInit} from '@angular/core';
import {MediaReviewModel} from '../../model/media-review.model';
import {MediaReviewListModel} from '../../model/media-review-list.model';

@Component({
  selector: 'app-media-reviews',
  templateUrl: './media-reviews.component.html',
  styleUrls: ['./media-reviews.component.scss']
})
export class MediaReviewsComponent implements OnInit {

  @Input() reviews: MediaReviewListModel;
  show: boolean;

  constructor() { }

  ngOnInit() {
  }

  getLimit(review: MediaReviewModel) {
    if (review.isCollapsed) {
      return 250;
    } else {
      return 200000;
    }
  }

}
