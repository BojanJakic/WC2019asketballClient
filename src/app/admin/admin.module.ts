import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin-home.component';
import { TeamHomeComponent } from './teams/team-home/team-home.component';
import { NewTeamComponent } from './teams/new-team/new-team.component';
import { TeamsOverviewComponent } from './teams/teams-overview/teams-overview.component';
import { PlayerHomeComponent } from './players/player-home/player-home.component';
import { NewPlayerComponent } from './players/new-player/new-player.component';
import { PlayersOverviewComponent } from './players/players-overview/players-overview.component';
import { TeamGroupHomeComponent } from './team-group/team-group-home/team-group-home.component';
import { NewTeamGroupComponent } from './team-group/new-team-group/new-team-group.component';
import { TeamGroupOverviewComponent } from './team-group/team-group-overview/team-group-overview.component';
import { AdminRoutingModule } from './admin-routing-module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  declarations: [
    AdminComponent,
    TeamHomeComponent,
    NewTeamComponent,
    TeamsOverviewComponent,
    PlayerHomeComponent,
    NewPlayerComponent,
    PlayersOverviewComponent,
    TeamGroupHomeComponent,
    NewTeamGroupComponent,
    TeamGroupOverviewComponent
  ]
})
export class AdminModule { }
