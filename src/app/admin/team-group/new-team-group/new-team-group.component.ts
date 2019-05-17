import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormArray, AbstractControl, Validators } from '@angular/forms';
import { TeamGroup } from '../../../models/interfaces/team-group';
import { RealTeam } from '../../../models/interfaces/real-team'
import { GroupName } from '../../../models/enums/group-name';
import { RealTeamService } from '../../../services/real-team/real-team.service';
import { TeamGroupService } from '../../../services/team-group/team-group.service';
import { UniqueGroupNameValidator } from '../../validators/uniqueGroupName';
import { GroupsTeamsCountValidator } from '../../validators/groupsTeamsCount'
import { Observable } from 'rxjs'

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
  isSubmited: boolean;

  newTeamGroupForm: FormGroup;
  teamGroup: TeamGroup = {
    teams: [],
    groupName: null
  }

  constructor(private realTeamService: RealTeamService,
    private teamGroupService: TeamGroupService,
    private renderer: Renderer2,
    private element: ElementRef) {
    this.groupsNames = Object.values(GroupName).filter(k => typeof k === 'string')
  }

  ngOnInit() {
    this.getTeams()
  }

  get teamsArray() {
    return this.newTeamGroupForm.get('teamName') as FormArray;
  }

  save() {
    this.isSubmited = true;
    this.setSelectedTeam();
    
    if(this.newTeamGroupForm.valid) {
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
      teamName: new FormArray(this.addTeamsControlls(), GroupsTeamsCountValidator.teamCount),
      groupName: new FormControl(this.teamGroup.groupName, Validators.required, [UniqueGroupNameValidator.uniqueGroupName(this.teamGroupService)]),
    })
  }

  addTeamsControlls() {
    return this.teams.map((team: RealTeam) => {
      return new FormControl(false)
    })
  }

  setSelectedTeam() {
    this.teamsArray.controls.forEach((team: FormControl, i: number) => {
      if (team.value) {
        this.teamGroup.teams.push(this.teams[i])
      }
    })
  }

  validate(event: any) {
    const teams = this.element.nativeElement.querySelectorAll('.team-input');
    let checkedCount = 0;

    teams.forEach(current => {
      if (current.checked) {
        checkedCount++;
      }
    })

    if (checkedCount === 4) {
      teams.forEach(current => {
        if (!current.checked) {
          this.renderer.setProperty(current, 'disabled', true)
        }
      })
    } else {
      teams.forEach(current => {
        this.renderer.setProperty(current, 'disabled', false)
      })
    }
  }
}
