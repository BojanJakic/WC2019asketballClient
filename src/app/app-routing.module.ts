import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin-home.component';
import {HomeComponent } from '../app/home/home.component';

const appRoutes: Routes = [
    //{ path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    //{ path: 'home', component: HomeComponent }
    // {
    //     path: 'admin',
    //     component: AdminComponent,
    //     children: [
    //         { path: 'new-team', component: CreateTeamComponent },
    //         { path: 'team-overview', component: TeamsOverviewComponent },
    //         { path: 'new-player', component: CreatePlayerComponent },
    //         { path: 'players-overview', component: PlayersOverviewComponent },
    //         { path: 'new-group', component: CreateGroupComponent },
    //         { path: 'groups-overview', component: GroupsOverviewComponent }
    //     ]
    // }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}