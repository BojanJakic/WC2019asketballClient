import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoginService {

  private subject = new Subject<any>();

  constructor() { }

  notify() {
    this.subject.next();
  }

  recieve() {
    return this.subject.asObservable();
  }
}
