import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TeamGroup } from '../../models/interfaces/team-group';

@Injectable()
export class TeamGroupService {

  private baseUrl: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  save(teamGroup: TeamGroup) {
    return this.http.post(this.baseUrl + '/team-group', teamGroup);
  }

  getAll() {
    return this.http.get(this.baseUrl + '/team-group');
  }
}
