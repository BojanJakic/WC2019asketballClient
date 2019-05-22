import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin-home.component';
import { HomeComponent } from '../app/components/home/home.component';
import { TeamHomeComponent } from '../app/admin/teams/team-home/team-home.component';
import { PlayerHomeComponent } from '../app/admin/players/player-home/player-home.component';
import { TeamGroupHomeComponent } from '../app/admin/team-group/team-group-home/team-group-home.component';
import { NewTeamComponent } from '../app/admin/teams/new-team/new-team.component';
import { TeamsOverviewComponent } from '../app/admin/teams/teams-overview/teams-overview.component';
import { NewPlayerComponent } from '../app/admin/players/new-player/new-player.component';
import { PlayersOverviewComponent } from '../app/admin/players/players-overview/players-overview.component';
import { TeamGroupOverviewComponent } from '../app/admin/team-group/team-group-overview/team-group-overview.component';
import { NewTeamGroupComponent } from '../app/admin/team-group/new-team-group/new-team-group.component';
import { LoginComponent } from '../app/components/login/login.component';
import { RegistrationComponent } from '../app/components/registration/registration.component';
import { PlayerDetailsComponent } from './shared/player-details/player-details.component';


const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'login', component: LoginComponent},
	{ path: 'registration', component: RegistrationComponent},
	{ path: 'player-details', component: PlayerDetailsComponent}
]

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }