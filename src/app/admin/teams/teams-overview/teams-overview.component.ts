import { Component, OnInit } from '@angular/core';
import { RealTeamService } from '../../../services/real-team/real-team.service';
import { RealTeam } from '../../../models/interfaces/real-team';

@Component({
  selector: 'app-teams-overview',
  templateUrl: './teams-overview.component.html',
  styleUrls: ['./teams-overview.component.css']
})
export class TeamsOverviewComponent implements OnInit {

  teams: RealTeam[];

  constructor(private realTeamService: RealTeamService) { }

  ngOnInit() {
    this.realTeamService.getAll().subscribe((response: RealTeam[]) => {
      this.teams = response;
      console.log(this.teams)
    })
  }
}
