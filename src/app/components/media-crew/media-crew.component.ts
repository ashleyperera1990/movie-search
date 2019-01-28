import {Component, Input, OnInit} from '@angular/core';
import {CrewMemberModel} from '../../model/crew-member.model';

@Component({
  selector: 'app-media-crew',
  templateUrl: './media-crew.component.html',
  styleUrls: ['./media-crew.component.scss']
})
export class MediaCrewComponent implements OnInit {

  @Input() crew: CrewMemberModel;

  constructor() { }

  ngOnInit() {
  }

}
