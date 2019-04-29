import { Component, OnInit } from '@angular/core';
import { HighlightService } from '../../../../../services/highlight.service';

@Component({
  selector: 'app-frontend-questions-css',
  templateUrl: './frontend-questions-css.component.html'
})
export class FrontendQuestionsCssComponent implements OnInit {
  myCode;

  constructor(private highlightService: HighlightService) { }

  ngOnInit() {
    this.highlightService.highlightAll();
  }

}
