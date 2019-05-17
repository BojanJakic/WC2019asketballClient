import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminComponent implements OnInit {

  activeLink: string = this.router.url;

  constructor(private router: Router) {
    this.router.events.subscribe(url => {
      if (url instanceof NavigationEnd) {
        this.activeLink = this.router.url;
      }
    })
  }

  ngOnInit() { }

  setActiveLink() {
    // // console.log(this.router.url)
    // // console.log(location.href)
    // console.log(this.router)
    // this.activeLink = this.router.url;
  }
}