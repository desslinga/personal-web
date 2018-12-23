import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ScreenChangeService {
  navItemActive: string;
  constructor() {
    this.navItemActive = 'about';
  }

  setNavItemActive(navItemActive: string): void {
    this.navItemActive = navItemActive;
  }

  getNavItemActive(): string {
    return this.navItemActive;
  }
}
