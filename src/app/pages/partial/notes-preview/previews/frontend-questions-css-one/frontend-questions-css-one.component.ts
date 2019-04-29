import { Component, OnInit } from '@angular/core';
import { HighlightService } from '../../../../../services/highlight.service';

@Component({
  selector: 'app-frontend-questions-css-one',
  templateUrl: './frontend-questions-css-one.component.html'
})
export class FrontendQuestionsCssOneComponent implements OnInit {
  myCode;

  constructor(private highlightService: HighlightService) { }

  ngOnInit() {
    this.highlightService.highlightAll();
  }

}
