import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loc',
  template: `<span class="loc"><ng-content></ng-content></span>`
})
export class LocComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
