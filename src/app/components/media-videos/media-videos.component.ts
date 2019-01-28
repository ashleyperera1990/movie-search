import {Component, Input, OnInit} from '@angular/core';
import {MediaVideoListModel} from '../../model/media-video-list.model';

@Component({
  selector: 'app-media-videos',
  templateUrl: './media-videos.component.html',
  styleUrls: ['./media-videos.component.scss']
})
export class MediaVideosComponent implements OnInit {

  @Input() videos: MediaVideoListModel;

  constructor() { }

  ngOnInit() {
  }

}
