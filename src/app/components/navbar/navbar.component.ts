import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  user: string = this.loggedInUser()
  subscription: Subscription;

  constructor(private loginService: LoginService, private router: Router, private route: ActivatedRoute) {
    this.subscription = loginService.recieve().subscribe(() => {
      this.user = this.loggedInUser();
    })
  }

  ngOnInit() {
  }

  loggedInUser() {
    return localStorage.getItem('user');
  }

  signout() {
    localStorage.removeItem('user');
    this.user = null;
    this.router.navigate(['/'])
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
