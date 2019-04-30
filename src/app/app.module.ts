import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { TeamGroupService } from './services/team-group/team-group.service'
import { RealTeamService } from './services/real-team/real-team.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlayerService } from './services/player/player.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule,
    NgbModule.forRoot(),
  ],
  providers: [
    TeamGroupService,
    RealTeamService,
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
