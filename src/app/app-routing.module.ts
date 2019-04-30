import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin-home.component';
import { HomeComponent } from '../app/home/home.component';
import { TeamHomeComponent } from '../app/admin/teams/team-home/team-home.component';
import { PlayerHomeComponent } from '../app/admin/players/player-home/player-home.component';
import { TeamGroupHomeComponent } from '../app/admin/team-group/team-group-home/team-group-home.component';
import { NewTeamComponent } from '../app/admin/teams/new-team/new-team.component';
import { TeamsOverviewComponent } from '../app/admin/teams/teams-overview/teams-overview.component';
import { NewPlayerComponent } from '../app/admin/players/new-player/new-player.component';
import { PlayersOverviewComponent } from '../app/admin/players/players-overview/players-overview.component';
import { TeamGroupOverviewComponent } from '../app/admin/team-group/team-group-overview/team-group-overview.component';
import { NewTeamGroupComponent } from '../app/admin/team-group/new-team-group/new-team-group.component';


const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{
		path: 'admin',
		component: AdminComponent,
		children: [
			{ path: '', redirectTo: 'players', pathMatch: 'full' },
			{
				path: 'teams', component: TeamHomeComponent,
				children: [
					{ path: '', redirectTo: 'new-team', pathMatch: 'full' },
					{ path: 'new-team', component: NewTeamComponent },
					{ path: 'teams-overview', component: TeamsOverviewComponent }
				]
			},
			{
				path: 'players', component: PlayerHomeComponent,
				children: [
					{ path: '', redirectTo: 'new-player', pathMatch: 'full' },
					{ path: 'new-player', component: NewPlayerComponent },
					{ path: 'players-overview', component: PlayersOverviewComponent }
				]
			},
			{
				path: 'team-groups', component: TeamGroupHomeComponent,
				children: [
					{ path: '', redirectTo: 'new-team-group', pathMatch: 'full' },
					{ path: 'new-team-group', component: NewTeamGroupComponent },
					{ path: 'team-group-overview', component: TeamGroupOverviewComponent }
				]
			}
		]
	}
]

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }