import { Component, OnInit, HostListener } from '@angular/core';
import { ScreenChangeService } from '../services/screen-change.service';
import { RouterModule, Routes, Router } from '@angular/router';
import { Location } from '@angular/common';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {
  navbarOpen: boolean;
  width: number;
  navItemActive : string;
  screenChangeService: ScreenChangeService;
  navMobileWidth : number;
  navTitle: Object;
  navOverlay: any;
  siteContent: any;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = window.innerWidth;
    if (this.width > this.navMobileWidth) {
      this.navbarOpen = false;
    }
  }

  navClick(url): void {
    this.router.navigate([url]);
    this.navItemActive = url;

    if (this.width < this.navMobileWidth) {
      this.toggleNavbar();
    }
  }

  toggleNavbar(): void {
    this.navOverlay = document.querySelector('.custom-nav');
    if (this.width > this.navMobileWidth) {
      return;
    }
    this.navbarOpen = !this.navbarOpen;
    if (this.navbarOpen) {
      disableBodyScroll(this.siteContent);
      disableBodyScroll(this.navOverlay);
    } else {
      clearAllBodyScrollLocks();
    }
  }

  constructor(private screenchangeservice: ScreenChangeService,
              private router: Router,
              private location: Location) {
    //enableBodyScroll();
    this.navbarOpen = false;
    this.width = window.innerWidth;
    this.screenChangeService = screenchangeservice;
    this.siteContent = document.querySelector('#home-container');
    this.navMobileWidth = 768;
    this.navTitle = {
      '/about':'ABOUT',
      '/gallery':'GALLERY'
    }

    this.navItemActive = this.location.path();
    console.log(this.navItemActive);

    router.events.subscribe((val) => {
      console.log("he");
      this.navItemActive = this.location.path();
    });
  }

  ngOnInit() {
  }

}
