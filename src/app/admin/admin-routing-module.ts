import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminComponent } from './admin-home.component';
import { TeamHomeComponent } from './teams/team-home/team-home.component';
import { PlayerHomeComponent } from './players/player-home/player-home.component';
import { TeamGroupHomeComponent } from './team-group/team-group-home/team-group-home.component';
import { NewTeamComponent } from './teams/new-team/new-team.component';
import { TeamsOverviewComponent } from './teams/teams-overview/teams-overview.component';
import { NewPlayerComponent } from './players/new-player/new-player.component';
import { PlayersOverviewComponent } from './players/players-overview/players-overview.component';
import { TeamGroupOverviewComponent } from './team-group/team-group-overview/team-group-overview.component';
import { NewTeamGroupComponent } from './team-group/new-team-group/new-team-group.component';


const adminRoutes: Routes = [
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
	imports: [
		RouterModule.forChild(adminRoutes),
		ReactiveFormsModule
	],
	exports: [
		RouterModule,
	]
})
export class AdminRoutingModule { }