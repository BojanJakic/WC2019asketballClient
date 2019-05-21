import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/interfaces/user';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = 'http://localhost:8080';

  save(user: User) {
    return this.http.post(this.baseUrl + '/user', user)
  }

  findByUsername(username: string) {
    return this.http.get(this.baseUrl + `/user/username/${username}`)
  }

  findByEmail(email: string) {
    return this.http.get(this.baseUrl + `/user/email/${email}`)
  }

}
