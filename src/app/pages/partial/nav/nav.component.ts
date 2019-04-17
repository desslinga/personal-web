import { Component, OnInit, HostListener } from '@angular/core';
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
  navMobileWidth : number;
  navTitle: Object;
  navOverlay: any;
  siteContent: any;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = window.innerWidth;
    if (this.width > this.navMobileWidth) {
      this.navbarOpen = false;
      clearAllBodyScrollLocks();
    }
  }

  navClick(url): void {
    var clickUrl = url;
    if (url == '/about-icon') {
      clickUrl = '/home';
    }
    this.router.navigate([clickUrl]);
    this.navItemActive = clickUrl;

    if (this.width < this.navMobileWidth && url != '/about-icon') {
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

  setNavItemActive(): void {
    if (this.navItemActive.startsWith('/about')) {
      this.navItemActive = '/about';
    } else if (this.navItemActive.startsWith('/work')) {
      this.navItemActive = '/work';
    }
  }

  constructor(private router: Router,
              private location: Location) {
    this.navbarOpen = false;
    this.width = window.innerWidth;
    this.siteContent = document.querySelector('#home-container');
    this.navMobileWidth = 768;

    this.navTitle = {
      '/about':'ABOUT',
      '/gallery':'GALLERY',
      '/work':'WORK'
    }

    this.navItemActive = this.location.path();
    this.setNavItemActive();

    router.events.subscribe((val) => {
      this.navItemActive = this.location.path();
      this.setNavItemActive();
    });
  }

  ngOnInit() {
  }

}
