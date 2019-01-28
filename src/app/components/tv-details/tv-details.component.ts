import {Component, Input, OnInit} from '@angular/core';
import {TvShowModel} from '../../model/tv-show.model';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss']
})
export class TvDetailsComponent implements OnInit {

  @Input() tvShow: TvShowModel;

  constructor() { }

  ngOnInit() {
  }

}
