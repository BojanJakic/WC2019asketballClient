import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RealTeam } from '../../../models/interfaces/real-team';
import { RealTeamService } from '../../../services/real-team/real-team.service';

@Component({
  selector: 'app-new-team',
  templateUrl: './new-team.component.html',
  styleUrls: ['./new-team.component.css']
})

export class NewTeamComponent implements OnInit {

  teamForm: FormGroup;
  team: RealTeam = {
    name: ''
  }

  constructor(private realTeamService: RealTeamService) { }

  ngOnInit() {
    this.setFormData();
  }

  save() {
    this.realTeamService.save(this.teamForm.value).subscribe(response => {
      console.log(response)
    })
  }

  setFormData() {
    this.teamForm = new FormGroup({
      name: new FormControl(this.team.name)
    })
  }
}
