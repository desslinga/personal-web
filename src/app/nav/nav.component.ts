import { Component, OnInit, HostListener } from '@angular/core';
import { ScreenChangeService } from '../services/screen-change.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {
  navbarOpen: boolean;
  width: number;
  navItemActive : String;
  screenChangeService: ScreenChangeService;

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

  constructor(private screenchangeservice: ScreenChangeService) {
    this.navbarOpen = false;
    this.width = window.innerWidth;
    this.screenChangeService = screenchangeservice;
    console.log(screenchangeservice);
    this.navItemActive = this.screenChangeService.getNavItemActive();
    console.log(this.navItemActive);
  }

  ngOnInit() {
  }

}
