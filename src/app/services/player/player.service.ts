import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';
import { Player } from '../../models/interfaces/player';

@Injectable()
export class PlayerService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = 'http://localhost:8080';

  save(player: Player) {
     return this.http.post(this.baseUrl + '/player', player)
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl + `/player/${id}`)
  }

  getAll() {
    return this.http.get(this.baseUrl + '/player')
  }

  getById(id: number) {
    return this.http.get(this.baseUrl + `/player/${id}`)
  }
}
