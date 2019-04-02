import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from '../app/admin/admin-home.component';
import { TeamHomeComponent } from '../app/admin/teams/team-home/team-home.component';
import { NewTeamComponent } from '../app/admin/teams/new-team/new-team.component';
import { TeamsOverviewComponent } from '../app/admin/teams/teams-overview/teams-overview.component';
import { PlayerHomeComponent } from '../app/admin/players/player-home/player-home.component';
import { NewPlayerComponent } from '../app/admin/players/new-player/new-player.component';
import { PlayersOverviewComponent } from '../app/admin/players/players-overview/players-overview.component';
import { TeamGroupHomeComponent } from '../app/admin/team-group/team-group-home/team-group-home.component';
import { NewTeamGroupComponent } from '../app/admin/team-group/new-team-group/new-team-group.component';
import { TeamGroupOverviewComponent } from '../app/admin/team-group/team-group-overview/team-group-overview.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
