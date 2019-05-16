import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { TeamGroup } from '../../../models/interfaces/team-group';
import { RealTeam } from '../../../models/interfaces/real-team'
import { GroupName } from '../../../models/enums/group-name';
import { RealTeamService } from '../../../services/real-team/real-team.service';
import { TeamGroupService } from '../../../services/team-group/team-group.service';

@Component({
  selector: 'app-new-team-group',
  templateUrl: './new-team-group.component.html',
  styleUrls: ['./new-team-group.component.css']
})
export class NewTeamGroupComponent implements OnInit {

  groupsNames: string[];
  teams: RealTeam[];
  selectedTeams: RealTeam[] = [];
  isLoaded: boolean;
  isValid: boolean  = true;

  newTeamGroupForm: FormGroup;
  teamGroup: TeamGroup = {
    teams: [],
    groupName: null
  }

  constructor(private realTeamService: RealTeamService, private teamGroupService: TeamGroupService) {
    this.groupsNames = Object.values(GroupName).filter(k => typeof k === 'string')
  }

  ngOnInit() {
    this.getTeams()
  }

  get teamsArray() {
   // console.log(this.newTeamGroupForm.get('teamName'))
    return this.newTeamGroupForm.get('teamName') as FormArray;
  }

  save() {
    this.setSelectedTeam();
    if(this.teamGroup.teams.length !== 4) {
      this.isValid = false;
      return;
    }
    this.teamGroupService.save(this.teamGroup).subscribe(response => {
      console.log(response)
    }, error => {
      console.log(error)
    })
  }

  getTeams() {
    this.realTeamService.getAll().subscribe((response: RealTeam[]) => {
      this.teams = response;
      this.isLoaded = true;
      this.setFormData();
    })
  }

  setFormData() {
    this.newTeamGroupForm = new FormGroup({
      teamName: new FormArray(this.addTeamsControlls()),
      groupName: new FormControl(this.teamGroup.groupName),
    })
  }

  addTeamsControlls() {
    return this.teams.map((team: RealTeam) => {
      return new FormControl(false)
    })
  }

  setSelectedTeam() {
    this.teamsArray.controls.forEach((team: FormControl, i: number) => {
      if(team.value) {
        this.teamGroup.teams.push(this.teams[i])
      }
    })
  }
}
