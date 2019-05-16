import { Component, OnInit } from '@angular/core';
import { TeamGroupService } from '../../../services/team-group/team-group.service';
import { TeamGroup } from '../../../models/interfaces/team-group';

@Component({
  selector: 'app-team-group-overview',
  templateUrl: './team-group-overview.component.html',
  styleUrls: ['./team-group-overview.component.css']
})
export class TeamGroupOverviewComponent implements OnInit {

  groups: TeamGroup[];

  constructor(private teamGroupService: TeamGroupService) { }

  ngOnInit() {
    this.teamGroupService.getAll().subscribe((response: TeamGroup[]) => {
      this.groups = response;
    })
  }
}
