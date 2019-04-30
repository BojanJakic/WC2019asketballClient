import { Component, OnInit } from '@angular/core';
import { Player } from '../../../models/interfaces/player';
import { FormControl, FormGroup } from '@angular/forms';
import { RealTeamService } from '../../../services/real-team/real-team.service';
import { RealTeam } from '../../../models/interfaces/real-team';
import { PlayerService } from '../../../services/player/player.service';
import { PlayerPosition } from '../../../models/enums/player-position'

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.css']
})
export class NewPlayerComponent implements OnInit {

  player: Player = {
    firstName: '',
    lastName: '',
    height: 0,
    dateOfBirth: null,
    position: null,
    fantasyValue: 0,
    realTeam: null,
    profilePicture: ''
  };
  playerForm: FormGroup;
  teams: RealTeam[] = [];
  isLoaded: boolean;
  positionKeys: string[];
  positionNames: string[];

  constructor(private realTeamService: RealTeamService, private playerService: PlayerService) { 
    this.positionKeys = Object.keys(PlayerPosition).filter(Number)
    this.positionNames = Object.values(PlayerPosition).filter(k => typeof k === 'string')
  }

  ngOnInit() {
    this.realTeamService.getAll().subscribe((response: RealTeam[]) => {
      this.teams = response;
      this.isLoaded = true;
      this.setFormData();
    })
  }

  save() {
    this.setDateOfBirth();
    this.playerService.save(this.playerForm.value).subscribe(response => {
      console.log(response)
    }, error => {
      console.log(error)
    })
  }

  setDateOfBirth() {
    const date = this.playerForm.value.dateOfBirth;
    this.playerForm.value.dateOfBirth = new Date(date.year, date.month, date.day)
  }

  onTeamChange(team: RealTeam) {
    this.playerForm.controls['realTeam'].setValue(team);
  }

  setFormData() {
    this.playerForm = new FormGroup({
      firstName: new FormControl(this.player.firstName),
      lastName: new FormControl(this.player.lastName),
      height: new FormControl(this.player.height),
      dateOfBirth: new FormControl(this.player.dateOfBirth),
      position: new FormControl(this.player.position),
      fantasyValue: new FormControl(this.player.fantasyValue),
      profilePicture: new FormControl(this.player.profilePicture),
      realTeam: new FormControl(this.player.realTeam)
    })
  }
}
