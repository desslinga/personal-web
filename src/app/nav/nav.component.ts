import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})


export class NavComponent implements OnInit {
  navbarOpen: boolean;
  width: number;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = window.innerWidth;
    if (this.width > 762) {
      this.navbarOpen = false;
    }
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor() {
    this.navbarOpen = false;
    console.log(window);
    this.width = window.innerWidth;
  }

  ngOnInit() {
  }

}
