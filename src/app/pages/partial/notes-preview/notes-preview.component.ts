import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-notes-preview',
  templateUrl: './notes-preview.component.html'
})
export class NotesPreviewComponent implements OnInit {
  @Input() project: string;
  title: string;

  constructor(private router: Router) {
    this.project = this.router.url.slice(7);
    console.log(this.project);
  }

  ngOnInit() {
    switch(this.project) {
      case 'frontend-questions-html':
        this.title = "Front-end Developer Interview Questions - HTML";
        break;
      case 'frontend-questions-css-one':
      case 'frontend-questions-css-two':
      case 'frontend-questions-css-three':
        this.title = "Front-end Developer Interview Questions - CSS";
        break;
      case 'frontend-questions-js-one':
      case 'frontend-questions-js-two':
      case 'frontend-questions-js-three':
      case 'frontend-questions-js-four':
        this.title = "Front-end Developer Interview Questions - JavaScript";
        break;
      default:
        break;
    }
  }

}
