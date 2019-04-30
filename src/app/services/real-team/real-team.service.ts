import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RealTeam } from '../../models/interfaces/real-team'; 

@Injectable()
export class RealTeamService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = 'http://localhost:8080';

  save(team: RealTeam) {
    return this.http.post(this.baseUrl + '/real-team', team)
  }

  getAll() {
    return this.http.get(this.baseUrl + '/real-team')
  }
}
