import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  navbarOpen: boolean;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor() {
    this.navbarOpen = false;
  }

  ngOnInit() {
  }

}
