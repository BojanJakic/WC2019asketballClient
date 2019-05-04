import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { TeamGroupService } from './services/team-group/team-group.service'
import { RealTeamService } from './services/real-team/real-team.service';
import { PlayerService } from './services/player/player.service';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule,
    SharedModule,
    CommonModule
  ],
  providers: [
    TeamGroupService,
    RealTeamService,
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
