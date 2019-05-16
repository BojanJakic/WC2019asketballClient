import { Component, OnInit } from '@angular/core';
import { Player } from '../../../models/interfaces/player';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RealTeamService } from '../../../services/real-team/real-team.service';
import { RealTeam } from '../../../models/interfaces/real-team';
import { PlayerService } from '../../../services/player/player.service';
import { PlayerPosition } from '../../../models/enums/player-position';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.css']
})
export class NewPlayerComponent implements OnInit {

  player: Player = {
    id: null,
    firstName: '',
    lastName: '',
    height: null,
    dateOfBirth: null,
    position: null,
    fantasyValue: null,
    realTeam: null,
    profilePicture: ''
  };
  playerForm: FormGroup;
  teams: RealTeam[] = [];
  isLoaded: boolean;
  positionNames: string[];
  isSubmitted: boolean;

  constructor(private realTeamService: RealTeamService, private playerService: PlayerService, private route: ActivatedRoute) {
    this.positionNames = Object.values(PlayerPosition).filter(k => typeof k === 'string')
    this.setFormData();
  }

  ngOnInit() {
    this.route.params.subscribe(param => {
      const id = param.playerId
      if (id) {
        this.playerService.getById(id).subscribe((player: Player) => {
          this.player = player;
          console.log(player)
          this.setFormData();
        }, error => {
          console.log(error)
        })
      }
    })
  }

  getTeams() {
    if (this.teams.length === 0) {
      this.realTeamService.getAll().subscribe((response: RealTeam[]) => {
        this.teams = response;
      })
    }
  }

  save() {
    this.isSubmitted = true;
    if(this.playerForm.invalid) {
      return;
    }
    this.setDateOfBirth();
    this.playerForm.value.id = this.player.id
    this.playerService.save(this.playerForm.value).subscribe((response: Player) => {
      this.player = response
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
      firstName: new FormControl(this.player.firstName, Validators.required),
      lastName: new FormControl(this.player.lastName, Validators.required),
      height: new FormControl(this.player.height, Validators.required),
      dateOfBirth: new FormControl(this.player.dateOfBirth, Validators.required),
      position: new FormControl(this.player.position, Validators.required),
      fantasyValue: new FormControl(this.player.fantasyValue, Validators.required),
      profilePicture: new FormControl(this.player.profilePicture),
      realTeam: new FormControl(this.player.realTeam, Validators.required)
    })
  }
}
