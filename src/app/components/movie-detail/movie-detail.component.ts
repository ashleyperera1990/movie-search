import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {MovieModel} from '../../model/movie.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  @Input() movie: MovieModel;

  constructor() {
  }

  ngOnInit() {
  }


}
