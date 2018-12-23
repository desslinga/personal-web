import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {
  navbarOpen: boolean;
  width: number;
  navItemActive : String;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = window.innerWidth;
    if (this.width > 768) {
      this.navbarOpen = false;
    }
  }

  toggleNavbar() {
    if (this.width > 768) {
      return;
    }
    this.navbarOpen = !this.navbarOpen;
    if (this.navbarOpen) {
      document.body.className = "no-scroll";
    } else {
      document.body.className = "";
    }
  }

  constructor() {
    this.navItemActive = 'about';
    this.navbarOpen = false;
    console.log(window);
    this.width = window.innerWidth;
  }

  ngOnInit() {
  }

}
