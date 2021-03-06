import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-notes-preview',
  templateUrl: './notes-preview.component.html'
})
export class NotesPreviewComponent implements OnInit {
  @Input() project: string;
  title: string;
  theme: string;

  constructor(private router: Router) {
    this.project = this.router.url.slice(7);
  }

  ngOnInit() {
    // determine theme of note
    if ([
      'frontend-questions-html',
      'frontend-questions-css-one',
      'frontend-questions-css-two',
      'frontend-questions-css-three',
      'frontend-questions-js-one',
      'frontend-questions-js-two',
      'frontend-questions-js-three',
      'frontend-questions-js-four'
    ].includes(this.project)) {
      this.theme = 'notes-dev';
    }
    if ([
      'personal-first-post'
    ].includes(this.project)) {
      this.theme = 'notes-personal';
    }
    if ([
      'cscc69-t1',
      'cscc69-t2',
      'cscc69-t3',
      'cscc69-t4',
      'cscc69-t5',
      'cscc69-t8',
      'cscc69-t9',
      'cscc69-t10'
    ].includes(this.project)) {
      this.theme = 'notes-academic'
    }

    // determine title of note
    switch(this.project) {
      case 'personal-first-post':
        this.title = "Welcome!";
        break;
      case 'cscc69-t1':
      case 'cscc69-t2':
      case 'cscc69-t3':
      case 'cscc69-t4':
      case 'cscc69-t5':
      case 'cscc69-t6':
      case 'cscc69-t7':
      case 'cscc69-t8':
      case 'cscc69-t9':
      case 'cscc69-t10':
        this.title = "CSCC69 Tutorial Notes";
        break;
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
