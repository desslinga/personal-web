import { Component, OnInit } from '@angular/core';
import { ScreenChangeService } from '../services/screen-change.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  const navItemActive = 'about';
  screenChangeService: ScreenChangeService;

  constructor(private screenchangeservice: ScreenChangeService) {
    this.screenChangeService = screenchangeservice;

    this.screenChangeService.setNavItemActive('about');
  }

  ngOnInit() {

  }

}
