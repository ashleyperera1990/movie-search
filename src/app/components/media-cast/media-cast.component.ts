import {Component, Input, OnInit} from '@angular/core';
import {CastMemberModel} from '../../model/cast-member.model';

@Component({
  selector: 'app-media-cast',
  templateUrl: './media-cast.component.html',
  styleUrls: ['./media-cast.component.scss']
})
export class MediaCastComponent implements OnInit {

  @Input() cast: CastMemberModel[];

  constructor() { }

  ngOnInit() {
  }

}
