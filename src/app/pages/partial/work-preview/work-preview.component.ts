import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-work-preview',
  templateUrl: './work-preview.component.html'
})
export class WorkPreviewComponent implements OnInit {
  @Input() project: string;
  title: string;

  constructor(private router: Router) {
    this.project = this.router.url.slice(6);
  }

  ngOnInit() {
    switch(this.project) {
      case 'closetr':
        this.title = "Closetr";
        break;
      case 'waffly':
        this.title = "Waffly";
        break;
      case 'sparknodes':
        this.title = "Sparknodes";
        break;
      default:
        break;
    }
  }

}
